import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //fake items
    items: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state over here
      state.items.push(action.payload);
      state.total += action.payload.card.info.price
        ? action.payload.card.info.price / 100
        : action.payload.card.info.defaultPrice / 100;

      state.quantity += 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
      state.total -= action.payload.card.info.price
        ? action.payload.card.info.price / 100
        : action.payload.card.info.defaultPrice / 100;

      state.quantity -= 1;
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
