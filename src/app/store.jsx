import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../fetures/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counterSlice,
  },
});
