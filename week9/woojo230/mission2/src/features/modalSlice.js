import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false, // 기본 상태
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      state.isVisible = true; // 모달창 표시
    },
    hideModal(state) {
      state.isVisible = false; //모달창 숨기기
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
