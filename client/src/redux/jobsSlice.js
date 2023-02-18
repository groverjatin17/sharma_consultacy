import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfJobOpenings: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.listOfJobOpenings = action.payload;
    },
  },
});

export const { setJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
