import React, { createContext, useContext, useState } from 'react';

// Context 생성
const TodoContext = createContext();

// Provider 컴포넌트 생성
export const TodoProvider = ({ children }) => {
  // 모든 상태값들을 Context로 이동
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  // Todo 추가 함수
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: input }]);
      setInput('');
    }
  };

  // Todo 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 수정 모드 시작 함수
  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  // 수정 내용 저장 함수
  const saveEdit = () => {
    setTodos(todos.map(todo => 
      todo.id === editId ? { ...todo, text: editText } : todo
    ));
    setEditId(null);
  };

  return (
    <TodoContext.Provider value={{
      todos,
      input,
      editId,
      editText,
      setInput,
      setEditText,
      addTodo,
      deleteTodo,
      startEdit,
      saveEdit
    }}>
      {children}
    </TodoContext.Provider>
  );
};

// 커스텀 훅 생성
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};