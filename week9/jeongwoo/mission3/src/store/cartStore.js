import { create } from 'zustand';
import { cartItems as initialItems } from '../constants/cartItems';

const useCartStore = create((set) => ({
  cartItems: initialItems,
  amount: 0,
  total: 0,
  increase: (id) => 
    set((state) => {
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount = cartItem.amount + 1;
      return { cartItems: [...state.cartItems] };
    }),
  decrease: (id) =>
    set((state) => {
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount = cartItem.amount - 1;
      if (cartItem.amount < 1) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== id)
        };
      }
      return { cartItems: [...state.cartItems] };
    }),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id)
    })),
  clearCart: () =>
    set(() => ({
      cartItems: []
    })),
  calculateTotals: () =>
    set((state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * parseInt(item.price);
      });
      return { amount, total };
    }),
}));

export default useCartStore;