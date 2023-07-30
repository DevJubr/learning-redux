import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../fetures/posts/postSlice";
import userReduser from "../fetures/users/userSlice";
export const store = configureStore({
  reducer: {
    posts: PostReducer,
    users: userReduser,
  },
});
