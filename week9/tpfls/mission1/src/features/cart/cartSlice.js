import { createSlice } from '@reduxjs/toolkit';
import cartItems from './cartItems';

const initialState = {
  cartItems: cartItems, // 초기 리스트는 유지
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 수량 증가
    increase: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    // 수량 감소
    decrease: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.amount -= 1;
        if (item.amount < 0) {
          item.amount = 0; // 음수로 가지 않도록 제한
        }
      }
    },
    // 장바구니 초기화: 리스트는 유지, 모든 수량(amount)을 0으로
    clearCart: (state) => {
      state.cartItems.forEach((item) => {
        item.amount = 0;
      });
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    // 총 수량과 총 금액 계산
    calculateTotals: (state) => {
      const totals = state.cartItems.reduce(
        (totals, item) => {
          totals.totalQuantity += item.amount;
          totals.totalAmount += item.amount * item.price;
          return totals;
        },
        { totalQuantity: 0, totalAmount: 0 }
      );
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },
  },
});

export const { increase, decrease, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
