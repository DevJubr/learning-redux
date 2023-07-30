import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "jwdhhehehuehue",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem possimus reiciendis maiores soluta, nemo natus explicabo neque dolor quibusdam eligendi eum porro dignissimos sequi accusamus est error, iure ut.",
  },
  {
    id: 12,
    title: "jwdhhehehuehue",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem possimus reiciendis maiores soluta, nemo natus explicabo neque dolor quibusdam eligendi eum porro dignissimos sequi accusamus est error, iure ut.",
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
          },
        };
      },
    },
  },
});

export const { addPost } = postSlice.actions;
export const getAllPosts = (state) => state.posts;
export default postSlice.reducer;
