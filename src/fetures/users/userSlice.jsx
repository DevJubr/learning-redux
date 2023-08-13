import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "hakimul ummt",
  },
  {
    id: 1,
    name: "ashragf ali",
  },
  {
    id: 2,
    name: "thanbi (R.)",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
