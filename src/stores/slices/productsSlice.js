// src/stores/slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {
    abc123: {
      id: 'abc123',
      name: '상품 1',
      price: 10000,
      imageUrl: 'https://example.com/product1.jpg',
    },
    def456: {
      id: 'def456',
      name: '상품 2',
      price: 12000,
      imageUrl: 'https://example.com/product2.jpg',
    },
  }
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
