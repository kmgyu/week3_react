import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Order from '@/pages/Order';
import orderReducer, { submitOrder } from '@/stores/slices/orderSlice';
import authReducer from '@/stores/slices/authSlice';

// submitOrder 액션 크리에이터 spy
jest.mock('@/stores/slices/orderSlice', () => {
  const originalModule = jest.requireActual('@/stores/slices/orderSlice');
  return {
    ...originalModule,
    submitOrder: jest.fn((payload) => ({
      type: 'order/submitOrder',
      payload
    })),
  };
});

function renderWithProviders(ui, { preloadedState, store = configureStore({
  reducer: {
    order: orderReducer,
    auth: authReducer,
  },
  preloadedState,
}), route = '/' } = {}) {
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('장바구니 항목이 화면에 표시되고, 주문 제출 시 store에 액션이 dispatch되며 라우팅된다', async () => {
    const preloadedState = {
      order: { pendingCart },
      auth: { token: authToken },
    };

    const user = userEvent.setup();

    renderWithProviders(<Order />, { preloadedState, route: '/order' });

    // 장바구니 항목 렌더링 확인
    expect(screen.getByText('사과')).toBeInTheDocument();
    expect(screen.getByText('바나나')).toBeInTheDocument();

    // 주문 버튼 클릭
    await user.click(screen.getByRole('button', { name: '주문 완료' }));

    // submitOrder가 올바른 payload로 호출됐는지 확인
    const items = Object.values(pendingCart);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    expect(submitOrder).toHaveBeenCalledWith({ userId: authToken, items, total });

    // alert 호출 확인
    expect(window.alert).toHaveBeenCalledWith('주문이 완료되었습니다!');

    // navigate('/') 동작 확인 → 라우터의 "/" 페이지로 이동
    expect(screen.getByText('홈')).toBeInTheDocument();
  });
});

// window.alert mock
beforeAll(() => {
  window.alert = jest.fn();
});
