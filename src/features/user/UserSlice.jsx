import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers(bulders) {
    bulders.addCase(fetchUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default userSlice.reducer;
