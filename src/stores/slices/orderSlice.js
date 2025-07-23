// src/stores/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pendingCart: {
    abc123: 2,
    def456: 1,
  },
  orderHistory: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increase: (state, action) => {
      const id = action.payload;
      state.pendingCart[id] = (state.pendingCart[id] || 0) + 1;
    },
    decrease: (state, action) => {
      const id = action.payload;
      if (state.pendingCart[id] > 1) {
        state.pendingCart[id] -= 1;
      }
    },
    submitOrder: (state, action) => {
      const { userId, items, total } = action.payload;
      state.orderHistory.push({
        id: crypto.randomUUID(), // 브라우저 지원 가능
        userId,
        items,
        total,
        createdAt: new Date().toISOString(),
      });
      state.pendingCart = {}; // 장바구니 초기화
    },
  },
});

export const { increase, decrease, submitOrder } = orderSlice.actions;
export default orderSlice.reducer;
