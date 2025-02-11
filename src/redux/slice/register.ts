import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,
    isFetching: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;
export default registerSlice.reducer;
