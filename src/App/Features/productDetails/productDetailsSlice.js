"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  opened: false,
  details: {},
  loading: false,
  id: "",
  quantity: 1,
};

const fetchProductsDetails = createAsyncThunk(
  "productsDetails/fetchProductsDetails",
  async (id) => {
    const productDetails = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return productDetails.data.drinks[0];
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    openProductDetails: (state, action) => {
      state.opened = action.payload.toggled;
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductsDetails.rejected, (state, action) => {
      state.loading = false;
      state.details = {};
      state.error = action.error.message;
    });
  },
});

export const { openProductDetails } =
  productDetailsSlice.actions;

export { fetchProductsDetails };

export default productDetailsSlice.reducer;
