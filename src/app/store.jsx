import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Products/ProductSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
