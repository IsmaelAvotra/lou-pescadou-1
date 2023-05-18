"use client";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  opened: false,
  total: 0,
  Products: [],
  checkoutSuccess: false,
  checkoutUrl: "",
  error: "",
};

const checkout = createAsyncThunk(
  "basket/checkout",
  async ({ userId, data }) => {
    const token = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
    const response = await axios.post(
      `http://192.168.1.16:8000/api/order/create/${userId}`,
      {
        "content-type": "application/json",
        data: data,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }
);

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    openBasket: (state, action) => {
      state.opened = action.payload.toggled;
    },
    addToBasket: (state, action) => {
      state.Products.push({
        id: action.payload.id,
        title: action.payload.title,
        quantity: 1,
        photoUrl: action.payload.photoUrl,
        description: action.payload.description,
        price: Number(action.payload.price),
      });
      state.total = state.total + Number(action.payload.price);
    },
    deleteFromBasket: (state, action) => {
      state.total -= state.Products.find(
        (p) => p.id === action.payload.id
      ).price;
      state.Products = state.Products.filter(
        (product) => product.id != action.payload.id
      );
    },
    addQuantity: (state, action) => {
      state.Products.map((product) => {
        if (product.id === action.payload.id) {
          console.log(product.quantity);
          product.quantity += 1;
        }
      });
    },
    subQuantity: (state, action) => {
      state.Products.map((product) => {
        if (product._id === action.payload.id) {
          product.quantity -= 1;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(checkout.fulfilled, (state, action) => {
      state.loading = false;
      state.checkoutUrl = action.payload.url;
      window.location.replace(action.payload.url);
      state.checkoutSuccess = true;
      state.error = "";
    });
    builder.addCase(checkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.checkoutSuccess = false;
      console.log(action.payload);
    });
  },
});

export const {
  openBasket,
  addToBasket,
  deleteFromBasket,
  addQuantity,
  subQuantity,
} = basketSlice.actions;
export { checkout };

export default basketSlice.reducer;
