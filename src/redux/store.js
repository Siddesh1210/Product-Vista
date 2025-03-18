import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice.js'

const store = configureStore({
  reducer: {
    productSlice: productReducer,
  },
});

export default store;
