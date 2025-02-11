import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cart";
import loginSlice from "./slice/login";
import registerSlice from "./slice/register";
// ...

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: loginSlice,
    register: registerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
