import { create } from 'zustand';  // 올바른 import 방식

const useCartStore = create((set) => ({
  items: [],
  totalAmount: 0,
  totalPrice: 0,

  increment: (id) => set((state) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { items: updatedItems };
  }),

  decrement: (id) => set((state) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === id) {
        if (item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(item => item !== null);
    return { items: updatedItems };
  }),

  calculateTotals: () => set((state) => {
    const totalAmount = state.items.reduce((total, item) => total + item.amount, 0);
    const totalPrice = state.items.reduce((total, item) => total + item.amount * item.price, 0);
    return { totalAmount, totalPrice };
  }),

  clearCart: () => set(() => ({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  })),

  setCartItems: (cartItems) => set(() => ({
    items: cartItems,
  })),
}));

export const { increment, decrement, calculateTotals, clearCart } = useCartStore.getState();

export default useCartStore;
