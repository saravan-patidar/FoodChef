import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItemCount: 0,
  },
  reducers: {
    addItems: (state, action) => {
      //   state.items.push(action.payload);
      const itemInCart = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      itemInCart
        ? itemInCart.quantity++
        : state.items.push({ ...action.payload, quantity: 1 });
      state.totalItemCount++;
    },
    decreaseItems: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (!itemInCart) return;
      if (itemInCart.length === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        itemInCart.quantity--;
      }
      state.totalItemCount--;
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
      state.totalItemCount--;
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalItemCount = 0;
    },
  },
});
export const { addItems, removeItems, clearCart } = cardSlice.actions;

export default cardSlice.reducer;
