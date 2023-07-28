import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "jwdhhehehuehue",
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem possimus reiciendis maiores soluta, nemo natus explicabo neque dolor quibusdam eligendi eum porro dignissimos sequi accusamus est error, iure ut.",
  },
  {
    id: 12,
    title: "jwdhhehehuehue",
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem possimus reiciendis maiores soluta, nemo natus explicabo neque dolor quibusdam eligendi eum porro dignissimos sequi accusamus est error, iure ut.",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export const getAllPosts = (state) => state.posts;
export default postSlice.reducer;
