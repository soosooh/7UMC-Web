import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 열고 닫는 상태
    isOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        // 모달을 여는 action
        openModal: (state, action) => {
            state.isOpen = true;
        },

        // 모달을 닫는 action
        closeModal: (state, action) => {
            state.isOpen = false;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;