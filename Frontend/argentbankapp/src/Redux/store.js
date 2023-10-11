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
    setUserDatas: (state, action) => {
      state.userData = action.payload; // Stockez les données de l'utilisateur dans le store
    },
  },
});

const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
  },
});

export const { signIn, signOut, setUserDatas } = signInSlice.actions; // Exportez les actions 

export default store;
