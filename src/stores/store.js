// src/stores/store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/orderSlice';
import productsReducer from './slices/productsSlice';
import authReducer from './slices/authSlice'; // optional
import postReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    order: orderReducer,
    products: productsReducer,
    auth: authReducer, // optional
    post: postReducer,
  },
});

export default store;
