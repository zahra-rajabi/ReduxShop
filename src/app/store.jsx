import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Products/ProductSlice";
import cardReducer from "../features/card/CardSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    products: productReducer,
    card: cardReducer,
  },
  // middleware: (getDefaultMiddlerware) => getDefaultMiddlerware().concat(logger),
});

export default store;
