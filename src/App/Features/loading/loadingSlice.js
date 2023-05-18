"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.isLoading = action.payload.toggled;
    },
  },
});

export const { showLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
