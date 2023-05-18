"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Screens } from "../../../enums/screensEnum";

const initialState = {
  screen: "home",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    switchScreen: (state, action) => {
      switch (action.payload.screen) {
        case Screens.HOME:
          state.screen = "home";
          break;
        case Screens.SEARCH:
          state.screen = "search";
          break;
        case Screens.BASKET:
          state.screen = "basket";
          break;
        case Screens.USER_PROFILE:
          state.screen = "userProfile";
          break;
        default:
          break;
      }
    },
  },
});

export const { switchScreen } = menuSlice.actions;

export default menuSlice.reducer;
