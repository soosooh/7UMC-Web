import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggle: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // 상태를 반전시킴
      }
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { add, toggle, remove } = todoSlice.actions; // toggle 내보내기
export default todoSlice.reducer;
