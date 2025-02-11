import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // اطلاعات کاربر
  token: null,  // توکن ورود
  isAuthenticated: false,  // وضعیت ورود
  loading: false,  // وضعیت در حال بارگذاری
  error: null,  // خطاها
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
