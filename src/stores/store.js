// src/stores/store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '@/stores/slices/orderSlice';

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

// 상태가 바뀔 때마다 localStorage에 저장
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('order', JSON.stringify(state.order));
});

export default store;
