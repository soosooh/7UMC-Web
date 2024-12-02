import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constant/CartItems';

const initialState = {
  cartItems: cartItems,
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.amount += 1;
    },
    decrease: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.amount -= 1;
        if (item.amount < 1) {
          state.cartItems = state.cartItems.filter(i => i.id !== item.id);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotals: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.amount,
        0
      );
    },
  },
});

export const { increase, decrease, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
