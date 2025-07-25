// src/stores/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const stored = localStorage.getItem('order');
const initialState = stored
  ? JSON.parse(stored)
  : {
    pendingCart: {},
    orderHistory: [],
  };

// const initialState = {
//     pendingCart: {},
//     orderHistory: [],
//   };

const persistOrderState = (state) => {
  const { pendingCart, orderHistory } = state;
  localStorage.setItem('order', JSON.stringify({ pendingCart, orderHistory }));
};


const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increase: (state, action) => { // insert item & increase
      const id = action.payload;
      state.pendingCart[id] = (state.pendingCart[id] || 0) + 1;
      persistOrderState(state);
    },
    decrease: (state, action) => {
      const id = action.payload;
      if (state.pendingCart[id] > 0) {
        state.pendingCart[id] -= 1;
      }
      persistOrderState(state);
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
      persistOrderState(state);
    },
  },
});

export const { increase, decrease, submitOrder } = orderSlice.actions;
export default orderSlice.reducer;
