import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "h1",
  },
  {
    id: 1,
    name: "h1",
  },
  {
    id: 2,
    name: "h1",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
