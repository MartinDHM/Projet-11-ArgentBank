import { configureStore } from "@reduxjs/toolkit";
import signInSlice from ".//signinSlice";
import userProfileSlice from "./userprofilSlice";

const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
    userProfile: userProfileSlice.reducer,
  },
});

export const { signIn, signOut } = signInSlice.actions;
export const { getUserData, editUserData } = userProfileSlice.actions;

export default store;
