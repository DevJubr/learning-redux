import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../fetures/posts/postSlice";
export const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});
