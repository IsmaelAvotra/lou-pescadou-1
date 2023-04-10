"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
};

export const searchPanelSlice = createSlice({
  name: "searchPanel",
  initialState,
  reducers: {
    openSearchPanel: (state, action) => {
      state.opened = action.payload.toggled;
    },
  },
});

export const { openSearchPanel } = searchPanelSlice.actions;

export default searchPanelSlice.reducer;