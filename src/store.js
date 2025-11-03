import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cartSlice";
import categorySlice from "./features/category/categorySlice";
import searchSlice from "./features/search/searchSlice";

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    category: categorySlice.reducer,
    search: searchSlice.reducer,
  },
});
