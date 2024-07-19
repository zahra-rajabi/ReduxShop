import { createSlice } from "@reduxjs/toolkit";
import { sumCounter, sumTotal } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
  counter: 0,
  total: 0,
  checkOut: false,
};

const CardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.counter = sumCounter(state.selectedItems);
        state.total = sumTotal(state.selectedItems);
        state.checkOut = false;
      }
    },
    removeItem: (state, action) => {
      if (state.selectedItems.find((item) => item.id === action.payload.id)) {
        const newItems = state.selectedItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.selectedItems = newItems;
        state.counter = sumCounter(state.selectedItems);
        state.total = sumTotal(state.selectedItems);
        state.checkOut = false;
      }
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[increaseIndex].quantity += 1;

      state.counter = sumCounter(state.selectedItems);
      state.total = sumTotal(state.selectedItems);
      state.checkOut = false;
    },

    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[decreaseIndex].quantity -= 1;

      state.counter = sumCounter(state.selectedItems);
      state.total = sumTotal(state.selectedItems);
      state.checkOut = false;
    },

    checkout: (state) => {
      state.checkOut = true;
      state.counter = 0;
      state.total = 0;
      state.selectedItems = [];
    },
  },
});

export default CardSlice.reducer;
export const { addItem, removeItem, checkout, increase, decrease } =
  CardSlice.actions;
