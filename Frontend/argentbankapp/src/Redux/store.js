import { configureStore, createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: { token: "", userData: null }, // Ajoutez une propriété "userData" à l'état initial
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      // récupère + stocke le token
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

// Exportez les actions
export const { signIn, signOut, setUserDatas } = signInSlice.actions;

export default store;
