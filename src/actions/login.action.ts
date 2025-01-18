import { createAsyncThunk } from "@reduxjs/toolkit";

import { userApi } from "../api/api";

export const loginAction = createAsyncThunk<
  { login: string },
  { login: string; password: string }
>("login/loginAction", async ({ login, password }) => {
  await userApi.login({ login, password });
  return { login };
});

export const logoutAction = createAsyncThunk<void>(
  "logout/logoutAction",
  async () => {
    const response = await userApi.logout();
    console.log("response", response);
  }
);
