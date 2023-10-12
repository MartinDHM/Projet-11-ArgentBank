import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    getUserData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      // Récupère les données
      // type : userProfile/getUserData, payload : userData
    },
    editUserData: (state, action) => {
      state.userName = action.payload;
      // Modifie le userName
      // type : userProfile/editUserData, payload : newUserName
    },
  },
});

export default userProfileSlice;
