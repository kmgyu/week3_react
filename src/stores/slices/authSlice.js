// src/stores/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchSignUp } from '@/utils/api';
import { fetchLogin } from '@/utils/api';

const stored = localStorage.getItem('token');
const initialState = stored
  ? JSON.parse(stored)
  : {
    //   isLoggedIn: false,
    //   user: null,  // 예: { id, name, email, ... }
    cartOwner: null, // 사용자 이메일
    token: null,
    };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {
  //   loginSuccess: (state, action) => {
  //   //   state.isLoggedIn = true;
  //   //   state.user = action.payload.user;
  //     const token = action.payload.token
  //     state.token = token;
  //     console.log(token);
  //     localStorage.setItem('token', token);
  //   },
  //   logout: (state) => {
  //   //   state.isLoggedIn = false;
  //   //   state.user = null;
  //     state.token = null;
  //   },
  // },
    extraReducers: (builder) => {
    builder
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        const token = action.payload.token
        state.token = token;
        console.log(token);
        localStorage.setItem('token', token);
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.error = action.payload || '알 수 없는 오류가 발생했습니다.';
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        const token = action.payload.token
        state.token = token;
        console.log(token);
        localStorage.setItem('token', token);
      })
            .addCase(fetchLogin.rejected, (state, action) => {
        state.error = action.payload || '알 수 없는 오류가 발생했습니다.';
      });
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
