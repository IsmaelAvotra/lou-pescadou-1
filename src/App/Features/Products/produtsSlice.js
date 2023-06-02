"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  productsData: [],
  error: "",
};

const fetchProductsData = createAsyncThunk(
  "products/fetchProductsData",
  async () => {
    const products = await axios.get("http://172.18.128.1:8000/api/products", {
      "content-type": "application/json",
    });
    return products.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.loading = false;
      state.productsData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductsData.rejected, (state, action) => {
      state.loading = false;
      state.productsData = [];
      state.error = action.error.message;
    });
  },
});

export { fetchProductsData };

export default productsSlice.reducer;
