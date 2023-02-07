import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import tourSlice from "./features/tour/tourSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    tour: tourSlice,
  },
});
