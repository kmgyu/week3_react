// src/api/productsAPI.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'; // Vite 기준

/**
 * 상품 리스트 조회
 * @returns {Promise<Array>} products
 */
export async function fetchProducts() {
  try {
    const response = await axios.get(`${baseURL}/api/api/products`);
    return response.data; // 백엔드가 { data: [...] } 형식이면 .data.data
  } catch (error) {
    console.error('상품 목록을 불러오는 중 오류 발생:', error);
    throw error;
  }
}
