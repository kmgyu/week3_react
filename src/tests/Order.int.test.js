// Order.test.jsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Order from '@/pages/Order';

// 핵심: default 리듀서 + 네임스페이스 동시 임포트
import orderReducer, * as orderSlice from '@/stores/slices/orderSlice';
import authReducer from '@/stores/slices/authSlice';

// window.alert mock (파일 초반에)
beforeAll(() => {
  window.alert = jest.fn();
});

// submitOrder만 spy (원본 모듈에 대해)
beforeEach(() => {
  jest.restoreAllMocks(); // 각 테스트 초기화
  jest.spyOn(orderSlice, 'submitOrder').mockImplementation((payload) => ({
    type: 'order/submitOrder',
    payload,
  }));
});

function renderWithProviders(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { order: orderReducer, auth: authReducer },
      preloadedState,
    }),
    route = '/',
  } = {}
) {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<div>홈</div>} />
          <Route path="/order" element={ui} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
}

describe('Order (integration)', () => {
  const pendingCart = {
    '1': { id: 1, name: '사과', price: 3000, quantity: 2 },
    '2': { id: 2, name: '바나나', price: 2000, quantity: 1 },
  };
  const authToken = 'uid_abc123';

  test('장바구니 렌더/제출/라우팅', async () => {
    const preloadedState = {
      order: { pendingCart, orderHistory: [] },
      auth: { token: authToken },
    };

    const user = userEvent.setup();
    renderWithProviders(<Order />, { preloadedState, route: '/order' });

    // 렌더 확인
    expect(screen.getByText('사과')).toBeInTheDocument();
    expect(screen.getByText('바나나')).toBeInTheDocument();

    // 제출
    await user.click(screen.getByRole('button', { name: '주문 완료' }));

    const items = Object.values(pendingCart);
    const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

    // spy 된 액션이 올바른 payload로 호출됐는지
    expect(orderSlice.submitOrder).toHaveBeenCalledWith({
      userId: authToken,
      items,
      total,
    });

    expect(window.alert).toHaveBeenCalledWith('주문이 완료되었습니다!');
    expect(screen.getByText('홈')).toBeInTheDocument();
  });
});
