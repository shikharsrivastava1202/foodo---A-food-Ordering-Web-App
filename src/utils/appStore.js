const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer, //name = cart is assigned from ./cartSlice not cartReducer
  },
});

export default appStore;
