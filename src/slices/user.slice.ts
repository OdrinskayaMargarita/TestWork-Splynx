import { createSlice } from "@reduxjs/toolkit";

import { loginAction, logoutAction } from "../actions/login.action";
import { IStore } from "../store/types";

const initialState: IStore["user"] = {
  isLogged: false,
  login: "",
};

export const userSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state: IStore["user"], action) => {
      state.login = action.payload.login;
      state.isLogged = true;
    });
    builder.addCase(logoutAction.fulfilled, (state: IStore["user"]) => {
      state.login = initialState.login;
      state.isLogged = initialState.isLogged;
    });
  },
  initialState,
  name: "user",

  reducers: {
    clearUser: (state) => {
      state.login = initialState.login;
      state.isLogged = initialState.isLogged;
    },
  },
});

export const { clearUser } = userSlice.actions;
