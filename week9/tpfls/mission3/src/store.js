import { create } from 'zustand';

const useStore = create((set) => ({
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  modalOpen: false,

  calculateTotals: () =>
    set((state) => {
      const totals = state.cartItems.reduce(
        (acc, item) => {
          acc.totalQuantity += item.amount;
          acc.totalAmount += item.amount * item.price;
          return acc;
        },
        { totalQuantity: 0, totalAmount: 0 }
      );
      return {
        totalQuantity: totals.totalQuantity,
        totalAmount: totals.totalAmount,
      };
    }),

  clearCart: () =>
    set(() => ({
      cartItems: [],
      totalAmount: 0,
      totalQuantity: 0,
    })),

  openModal: () => set(() => ({ modalOpen: true })),
  closeModal: () => set(() => ({ modalOpen: false })),
}));

export default useStore;
