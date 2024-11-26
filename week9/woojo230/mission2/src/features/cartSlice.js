import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // 장바구니 항목 리스트
  totalAmount: 0, // 총 수량
  totalPrice: 0, // 총 가격
  totalQuantity: 0, // 항목의 종류 개수
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeItems(state, action) {
      state.items = action.payload.map((item) => ({ ...item, amount: 1 }));
      state.totalAmount = state.items.length; // 총 수량 = 초기 항목 수
      state.totalPrice = state.items.reduce(
        (total, item) => total + parseInt(item.price, 10),
        0
      ); // 총 가격 계산
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.amount,
        0
      ); // 초기 항목 수로 설정
    },

    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.amount++; // 기존 항목의 수량 증가
      } else {
        state.items.push({ ...action.payload, amount: 1 }); // 새 항목 추가
      }

      state.totalAmount++; // 총 수량 증가
      state.totalPrice += parseInt(action.payload.price, 10); // 총 가격 증가

      // totalQuantity 업데이트
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.amount,
        0
      );
    },

    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.amount--; // 항목의 수량 감소
        state.totalAmount--; // 총 수량 감소
        state.totalPrice -= parseInt(existingItem.price, 10); // 총 가격 감소

        if (existingItem.amount === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          ); // 수량이 0이 되면 제거
          state.totalQuantity--; // 항목 종류 감소
        }
      }

      // totalQuantity 업데이트
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.amount,
        0
      );
    },

    clearCart(state) {
      state.items = []; // 모든 항목 제거
      state.totalAmount = 0; // 총 수량 초기화
      state.totalPrice = 0; // 총 가격 초기화
      state.totalQuantity = 0; // 항목 종류 초기화
    },
  },
});

export const { initializeItems, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
