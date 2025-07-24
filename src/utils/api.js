import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'; // Vite 기준
const loginToken = import.meta.env.VITE_API_LOGIN_TOKEN || '';

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

/**
 * 회원 가입
 * @param {*} name 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */

export const fetchSignUp = createAsyncThunk(
  'auth/fetchSignUp', // redux action type
  async ({name, email, password}, {rejectWithValue}) => {
    try {
    const response  = await axios.post(`${baseURL}/api/api/signup`, {
            name,
            email,
            password,
        });
    return {token: response.data.uid };
    } catch (error) {
      console.error('회원가입 중 오류 발생', error);
      return rejectWithValue(error.response?.data?.message || '회원가입 실패');
    }

  }
);
// {
//     try {
//         = 
//     } catch (error) {

//     }
// }

