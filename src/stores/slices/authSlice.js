// src/stores/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const stored = localStorage.getItem('auth');
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
  reducers: {
    loginSuccess: (state, action) => {
    //   state.isLoggedIn = true;
    //   state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
