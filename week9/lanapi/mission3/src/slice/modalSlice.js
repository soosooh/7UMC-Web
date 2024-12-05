import { create } from 'zustand';  // 올바른 방식으로 zustand import

const useModalStore = create((set) => ({
  isOpen: false,

  openModal: () => set({ isOpen: true }),

  closeModal: () => set({ isOpen: false }),
}));

export const { openModal, closeModal } = useModalStore.getState();

export default useModalStore;
