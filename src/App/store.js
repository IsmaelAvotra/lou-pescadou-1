"use client";

import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./Features/Card/basketSlice";
import searchPanelSlice from "./Features/searchPanel/searchPanelSlice";
import menuSlice from "./Features/manu/menuSlice";
import productDetailsSlice from "./Features/productDetails/productDetailsSlice";
import productsSlice from "./Features/Products/produtsSlice";
import authSlice from "./Features/auth/authSlice";
import loadingSlice from "./Features/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    basket: BasketSlice,
    searchPanel: searchPanelSlice,
    menu: menuSlice,
    productDetails: productDetailsSlice,
    products: productsSlice,
    auth: authSlice
  },
});
