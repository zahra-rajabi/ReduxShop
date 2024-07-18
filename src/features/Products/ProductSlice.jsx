import api from "../../services/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchingProducts = createAsyncThunk("product/fetchingProduct", () => {
  return api.get("/products");
});

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchingProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchingProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });

    builder.addCase(fetchingProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
export { fetchingProducts };
