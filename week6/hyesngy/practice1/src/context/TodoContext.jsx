import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(false);
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 추가
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('할 일을 입력해주세요!');
      return;
    }

    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text }
    ]);
    setText('');
  };

  // 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정
  const updateTodo = (id, text) => {
    if (text.trim().length === 0) {
      alert('텍스트를 입력해주세요!');
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
    setEditText('');
  };

  return <TodoContext.Provider value={{
    todos, setTodos, text, setText, editingId, setEditingId, editText, setEditText,
    handleSubmit, addTodo, deleteTodo, updateTodo
  }}>
    {children}
  </TodoContext.Provider>
}