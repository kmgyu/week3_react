// src/stores/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 로컬스토리지 초기값 불러오기
const stored = localStorage.getItem('order');
const initialState = stored ? JSON.parse(stored) : {
  pendingCart: {
    // 예시: productId: quantity
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increase: (state, action) => {
      const id = action.payload;
      state.pendingCart[id] = (state.pendingCart[id] || 1) + 1;
    },
    decrease: (state, action) => {
      const id = action.payload;
      if (state.pendingCart[id] > 1) {
        state.pendingCart[id] -= 1;
      }
    },
    resetOrder: (state) => {
      state.items = {};
    }
  },
});

export const { increase, decrease, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
