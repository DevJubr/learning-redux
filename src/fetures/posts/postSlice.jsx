import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fatechPost = createAsyncThunk("post/fatechPost", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, { payload }) => {
        state.posts.push(payload);
      },
      prepare: (data, userid) => {
        return {
          payload: {
            id: nanoid(),
            userid,
            date: new Date().toISOString(),
            ...data,
            reacts: {
              like: 0,
              love: 0,
              wow: 0,
            },
          },
        };
      },
    },
    addReactions: {
      reducer: (state, action) => {
        const { postId, react } = action.payload;
        console.log(state, postId, react);
        const giveReactOnThis = state.posts.find((post) => post.id === postId);
        if (giveReactOnThis) {
          giveReactOnThis.reacts[react]++;
        }
      },
    },
  },
  extraReducers(builder) {
    builder.addCase(fatechPost.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(fatechPost.fulfilled, (state, action) => {
      state.status = "success";

      let min = 1;
      console.log("payload,", action.payload);
      const loadedPost = action.payload.map((item) => {
        item.date = sub(new Date(), { minutes: min++ }).toISOString();
        item.reacts = {
          like: 0,
          love: 0,
          wow: 0,
        };
        item.keyy = nanoid();
        return item;
      });

      state.posts = state.posts.concat(loadedPost);
      console.log("first time", state.posts);
    });
    builder.addCase(fatechPost.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
export const getAllPosts = (state) => state.posts.posts;
export const getstatus = (state) => state.posts.status;
export const getError = (state) => state.posts.error;
export const { addPost, addReactions } = postSlice.actions;

export default postSlice.reducer;
