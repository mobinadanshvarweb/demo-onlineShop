import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  data: Array<{
    name: string;
    src: string;
    price: string;
    id: number;
    isAdded: boolean;
    count: number;
  }>;
}

const initialState: CartState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
