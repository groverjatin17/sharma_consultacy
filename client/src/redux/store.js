import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    userProfile: userReducer,
  },
});
