import { configureStore } from "@reduxjs/toolkit";
import PostReduser from "../features/post/PostSlice";
const store = configureStore({
  reducer: {
    post: PostReduser,
  },
});

export default store;
