import { create } from 'zustand';
import cartItems from "../../constants/cartItems";

const useStore = create((set) => ({
  cartItems: cartItems,
  amount: 0,
  total: 0,

  // 증가
  increase: (id) => set((state) => {
    const item = state.cartItems.find(cartItem => cartItem.id === id);
    if (item) item.amount += 1;
    return { cartItems: [...state.cartItems] };
  }),

  // 감소
  decrease: (id) => set((state) => {
    const item = state.cartItems.find(cartItem => cartItem.id === id);
    if (item) {
      item.amount -= 1;
      if (item.amount <= 0) {
        state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== id);
      }
    }
    return { cartItems: [...state.cartItems] };
  }),

  // 카트 초기화
  clearCart: () => set({ cartItems: [] }),

  // 전체 계산
  calculateTotals: () => set((state) => {
    let amount = 0;
    let total = 0;
    state.cartItems.forEach(item => {
      amount += item.amount;
      total += item.amount * item.price;
    });
    return { amount, total };
  }),
}));

export default useStore;
