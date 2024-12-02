import { create } from "zustand";
import cartItems from "../../constants/cartItems";
const zustandSlice = create((set) => ({
  cartItems: [...cartItems], // 장바구니 아이템 배열
  total: 0, // 총합
  amount: 0, // 총 수량
  isOpen: false, // 모달 상태

  // 상태 변경 메서드들
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),

  // 장바구니 초기화
  clearCart: () => set({ cartItems: [], total: 0, amount: 0 }),

  // 장바구니 아이템 추가/삭제 시 총합 계산
  calculateTotals: () =>
    set((state) => {
      const { total, amount } = state.cartItems.reduce(
        (acc, item) => {
          acc.amount += item.amount;
          acc.total += item.amount * item.price;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      return { total, amount };
    }),

  // 아이템 증가
  increase: (id) =>
    set((state) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      return { cartItems: updatedItems };
    }),

  // 아이템 감소
  decrease: (id) =>
    set((state) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      return { cartItems: updatedItems };
    }),

  // 아이템 삭제
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
}));

export default zustandSlice;
