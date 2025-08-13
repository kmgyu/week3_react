// src/stores/store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/orderSlice';
import productsReducer from './slices/productsSlice';
import authReducer from './slices/authSlice'; // optional

const store = configureStore({
  reducer: {
    order: orderReducer,
    products: productsReducer,
    auth: authReducer, // optional
  },
});

export default store;
