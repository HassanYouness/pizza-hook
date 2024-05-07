import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      if (!state.cart.map((el) => el.pizzaId).includes(action.payload.pizzaId))
        state.cart = [...state.cart, action.payload];
    },
    removePizza(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId != action.payload);
    },
    removeAll(state, action) {
      state.cart = action.payload;
    },
  },
});
export const { addPizza, removePizza, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
