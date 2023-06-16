"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authUser } from "@/shared/contracts/auth-types";

const initialState = {
  user: {
    token: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    id: "",
  } as authUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<authUser>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { saveUser, resetUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;