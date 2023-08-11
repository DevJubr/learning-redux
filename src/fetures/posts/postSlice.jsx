import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: nanoid(),
    title: "jwdhhehehuehue",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem possimus reiciendis maiores soluta, nemo natus explicabo neque dolor quibusdam eligendi eum porro dignissimos sequi accusamus est error, iure ut.",
    reacts: {
      like: 0,
      love: 0,
      wow: 0,
    },
  },

  {
    id: nanoid(),
    title: "jwdhhehehuehue",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem possimus reiciendis maiores soluta, nemo natus explicabo neque dolor quibusdam eligendi eum porro dignissimos sequi accusamus est error, iure ut.",
    reacts: {
      like: 0,
      love: 0,
      wow: 0,
    },
  },
];

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
});

export const { addPost, addReactions } = postSlice.actions;
export const getAllPosts = (state) => state.posts;
export default postSlice.reducer;
