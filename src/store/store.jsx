import { configureStore } from "@reduxjs/toolkit";
import PostReduser from "../features/post/PostSlice";
import UserReduser from "../features/user/UserSlice";
const store = configureStore({
  reducer: {
    post: PostReduser,
    users: UserReduser,
  },
});

export default store;
