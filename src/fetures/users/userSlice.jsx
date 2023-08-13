import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
export const fetChUser = createAsyncThunk("atir/usr", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetChUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;
