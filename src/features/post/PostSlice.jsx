import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "posts/getPostFromGGl",
  async () => {}
);
const initialState = {};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default postSlice.reducer;
