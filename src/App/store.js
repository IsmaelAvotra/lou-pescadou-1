"use client";

import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./Features/Card/basketSlice";
import searchPanelSlice from "./Features/searchPanel/searchPanelSlice";
import menuSlice from "./Features/manu/menuSlice";
import productDetailsSlice from "./Features/productDetails/productDetailsSlice";
import productsSlice from "./Features/Products/produtsSlice";

export const store = configureStore({
  reducer: {
    basket: BasketSlice,
    searchPanel: searchPanelSlice,
    menu: menuSlice,
    productDetails: productDetailsSlice,
    products: productsSlice,
  },
});
