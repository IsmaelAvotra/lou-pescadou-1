"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
  total: 0,
  Products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    openBasket: (state) => {
      state.opened = !state.opened;
    },
    addToBasket: (state, action) => {
      state.Products.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        price: Number(action.payload.price),
      });
      state.total = state.total + Number(action.payload.price);
    },
    deleteFromBasket: (state, action) => {
      Products.filter((product) => product.id != action.payload.id);
    },
  },
});

export const { openBasket, addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
