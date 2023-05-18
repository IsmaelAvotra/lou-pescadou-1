"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
  user: {},
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    openUserProfile: (state, action) => {
      state.opened = action.payload.toggled;
    },
    addToBasket: (state, action) => {
      console.log(action.payload.id);
      state.Products.push({
        id: action.payload.id,
        title: action.payload.title,
        photoUrl: action.payload.photoUrl,
        description: action.payload.description,
        price: Number(action.payload.price),
      });
      state.total = state.total + Number(action.payload.price);
    },
    deleteFromBasket: (state, action) => {
      state.total -= state.Products.find(p => p.id === action.payload.id).price
      state.Products = state.Products.filter(
        (product) => product.id != action.payload.id
      );
    },
  },
});

export const { openBasket, addToBasket, deleteFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
