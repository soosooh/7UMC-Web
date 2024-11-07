import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: "todo만들어보기" },
    { id: 2, task: "안녕하세요" },
  ]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: Math.floor(Math.random() * 100) + 2, task: text }]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? { ...item, task: newText } : item)));
    setEditingId("");
  };

  const handleEditClick = (id, task) => {
    setEditingId(id);
    setEditText(task);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        text,
        setText,
        editingId,
        editText,
        setEditText,
        addTodo,
        deleteTodo,
        updateTodo,
        handleEditClick,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
