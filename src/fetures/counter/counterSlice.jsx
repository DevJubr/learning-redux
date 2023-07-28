import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    incriment: (state) => {
      state.count += 1;
    },
    dicriment: (state) => {
      state.count -= 1;
    },
  },
});

export const { incriment, dicriment } = countSlice.actions;
export default countSlice.reducer;
