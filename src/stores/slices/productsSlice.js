// src/stores/slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 원래 용도 : 장바구니
// 현재? 용도? : 안씀.
// 미리 캐싱해서 쿠키에 저장해두고 보여주는 형태는 어떨까
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
