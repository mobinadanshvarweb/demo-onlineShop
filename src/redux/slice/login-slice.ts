import { createSlice } from "@reduxjs/toolkit";
import { LoginType } from "../../validation/login-type";

const initialLogin = {
  email: "",
  password: "",
};
export interface LoginState {
  login: LoginType;
  token: string | null;
  error: string | null;
}
const initialState: LoginState = {
  login: initialLogin,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = { ...state.login, ...action.payload };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setLogin, setError, clearError } = userSlice.actions;

export default userSlice.reducer;
