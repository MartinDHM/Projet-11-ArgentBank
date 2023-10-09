import { configureStore, createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: { token: "" },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      // recupère + stocke le token
    },
    signOut: (state) => {
      state.token = "";
      // supprime le token
    },
  },
});

const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
  },
});

export const { signIn, signOut } = signInSlice.actions; // Exportez les actions signIn et signOut

export default store;
