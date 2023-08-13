import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,

  // {
  //   id: nanoid(),
  //   title: "jwdhhehehuehue",
  //   date: sub(new Date(), { minutes: 10 }).toISOString(),
  //   dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem possimus reiciendis maiores soluta, nemo natus explicabo neque dolor quibusdam eligendi eum porro dignissimos sequi accusamus est error, iure ut.",
  //   reacts: {
  //     like: 0,
  //     love: 0,
  //     wow: 0,
  //   },
  // },
};

const fatechPost = createAsyncThunk("post/fatechPost", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, { payload }) => {
        state.push(payload);
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
        const giveReactOnThis = state.find((post) => post.id === postId);
        if (giveReactOnThis) {
          giveReactOnThis.reacts[react]++;
        }
      },
    },
  },
  extraReducers(bullder) {
    bullder.addCase(fatechPost.pending, (state, _action) => {
      state.status = "loading";
    });
    bullder.addCase(fatechPost.fulfilled, (state, action) => {
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
      });

      state.posts = state.posts.concat(loadedPost);
    });
  },
});

export const { addPost, addReactions } = postSlice.actions;
export const getAllPosts = (state) => state.posts.posts;
export default postSlice.reducer;
