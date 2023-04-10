"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  opened: false,
  details: {},
  loading: false,
  id: "",
  quantity: 0,
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
    addQuantity: (state) => {
      state.quantity = state.quantity + 1;
    },
    subQuantity: (state) => {
      if (state.quantity == 0) {
        return;
      }
      state.quantity = state.quantity - 1;
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
      console.log(action.payload);
    });
    builder.addCase(fetchProductsDetails.rejected, (state, action) => {
      state.loading = false;
      state.details = {};
      state.error = action.error.message;
    });
  },
});

export const { openProductDetails, addQuantity, subQuantity } =
  productDetailsSlice.actions;

export { fetchProductsDetails };

export default productDetailsSlice.reducer;
