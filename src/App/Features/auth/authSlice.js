"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  login: {
    loading: false,
    user: {},
    error: "",
    success: false,
  },
  register: {
    loading: false,
    user: {},
    error: "",
    success: false,
  },
};

const register = createAsyncThunk("auth/register", async (user) => {
  if (!user.name || !user.email || !user.password)
    return toast("please provide the needed data");
  const response = await axios.post(
    "http://192.168.1.16:8000/api/signup",
    {
      "content-type": "application/json",
      data: user,
    }
  ).catch(error => console.log(error));
  return response.data;
});

const login = createAsyncThunk("auth/login", async (user) => {
  if (!user.email || !user.password)
    return toast("please provide the needed data");
  const response = await axios.post("http://192.168.1.16:8000/api/signin", {
    "content-type": "application/json",
    data: user,
  });
  return response.data;
});

export const productsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.login.success = false;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.register.success = false;
      state.register.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.register.loading = false;
      state.register.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.register.error = "";
      state.register.success = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.register.success = false;
      state.register.loading = false;
      state.register.user = {};
      state.register.error = action.error.message;
    });
    builder.addCase(login.pending, (state) => {
      state.login.success = false;
      state.login.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.login.success = true;
      state.login.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.loading = false;
      state.login.success = false;
      state.login.user = {};
      if (action.error.message.split(" ")[5] == 401) {
        toast("username or password is incorrect");
      }
      state.login.error = action.error.message;
    });
  },
});

export const { logOut } = productsSlice.actions;

export { register, login };

export default productsSlice.reducer;
