import { createSlice } from "@reduxjs/toolkit";
import { loadCompareProducts, saveCompareProducts, clearCompareProductsFromStorage } from "../../utils/utils";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
      products: [], // Used to store all Products
      compareProducts: loadCompareProducts(), // Load from localStorage on init
    },
    reducers: {
      addProducts: (state, action) => {
        state.products.push(...action.payload);
      },
      addCompareProducts: (state, action) => {
        const exists = state.compareProducts.find(
          (product) => product.id === action.payload.id
        );
        if (!exists && state.compareProducts.length < 4) {
          state.compareProducts.push(action.payload);
          saveCompareProducts(state.compareProducts); // Save to localStorage
        }
      },
      removeCompareProduct: (state, action) => {
        state.compareProducts = state.compareProducts.filter(
          (product) => product.id !== action.payload.id
        );
        saveCompareProducts(state.compareProducts); // Save updated list
      },
      clearCompareProducts: (state) => {
        state.compareProducts = [];
        clearCompareProductsFromStorage(); // Clear localStorage
      },
    },
  });
  
  export const {
    addProducts,
    addCompareProducts,
    removeCompareProduct,
    clearCompareProducts,
  } = productSlice.actions;
  
  export default productSlice.reducer;