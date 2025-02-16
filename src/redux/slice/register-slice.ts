import { createSlice } from "@reduxjs/toolkit";
import { RegisterType } from "../../validation/register-type";

const initialRegister = {
  name: "",
  email: "",
  password: "",
};
export interface RegisterState {
  register: RegisterType;

  error: string | null;
}
const initialState: RegisterState = {
  register: initialRegister,
  error: null,
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.register = { ...state.register, ...action.payload };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRegister, setError } = registerSlice.actions;
export default registerSlice.reducer;
