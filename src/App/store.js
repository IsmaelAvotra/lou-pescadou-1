"use client";

import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./Features/Card/basketSlice";

export const store = configureStore({
  reducer: {
    basket: BasketSlice,
  },
});
