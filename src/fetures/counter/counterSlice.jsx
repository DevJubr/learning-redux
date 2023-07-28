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
    reset: (state) => {
      state.count = 0;
    },
    incrimentByn: (state, action) => {
      state.count += +action.payload;
    },
  },
});

export const { incriment, dicriment, incrimentByn, reset } = countSlice.actions;
export default countSlice.reducer;
