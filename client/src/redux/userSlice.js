import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userDetails:{}
};

export const userSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserDetails: (state, action) => {
        state.userDetails = action.payload;
      },
  },
});

export const { setUser, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
