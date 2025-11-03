import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const selectedItem = state.cartItem.findIndex(
        (product) => product.id === newItem.id
      );

      if (selectedItem !== -1) {
        state.cartItem[selectedItem].quantity += 1;
        state.cartItem[selectedItem].totalPrice =
          state.cartItem[selectedItem].quantity * newItem.price;
      } else {
        state.cartItem.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItem.find((product) => product.id === id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItem.find((product) => product.id === id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cartItem = state.cartItem.filter(
            (product) => product.id !== id
          );
        } else {
          item.totalPrice = item.quantity * item.price;
        }
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((product) => product.id !== id);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice;

//selector
export const selectCartItems = (state) => state.cart.cartItem;
export const selectCartTotalItems = (state) =>
  state.cart.cartItem.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrice = (state) =>
  state.cart.cartItem.reduce((total, item) => total + item.totalPrice, 0);
