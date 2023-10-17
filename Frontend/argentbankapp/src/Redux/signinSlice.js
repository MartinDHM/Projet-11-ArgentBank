import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    token: "",
    islogin: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      state.islogin = true;
      // recupère + stocke le token
    },
    signOut: (state) => {
      state.token = "";
      state.islogin = false;
      // supprime le token
    },
  },
});

export default signInSlice;
