import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

export const fetchPost = createAsyncThunk("posts/getPostFromGGl", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});
const initialState = {
  posts: [],
  status: "idle",
  error: "",
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.status = "done";

      const modifiedPost = action.payload.map((post) => {
        post.date = sub(new Date(), { minutes: 1 }).toISOString();
        post.id = nanoid();
        return post;
      });
      state.posts = modifiedPost;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
// getter func
export const getPosts = (state) => state.post.posts;
export const getStatus = (state) => state.post.status;
export default postSlice.reducer;
