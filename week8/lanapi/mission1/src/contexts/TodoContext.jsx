import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const forbiddenTitle = 'Untitled Todo'; // 제한할 제목

  // Todo 목록 가져오기
  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/todo');
      const data = response.data;

      // 금지된 제목 필터링 및 최신 순 정렬
      const filteredData = data
        .filter((todo) => todo.title !== forbiddenTitle)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setTodos(filteredData);

      // 금지된 제목 Todo 삭제
      const problematicTodos = data.filter((todo) => todo.title === forbiddenTitle);
      for (const todo of problematicTodos) {
        await axios.delete(`http://localhost:3000/todo/${todo.id}`);
      }
    } catch (err) {
      console.error('Failed to fetch todos:', err.message);
      setError('할 일을 가져오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // Todo 추가
  const addTodo = async (title, content) => {
    try {
      if (title.trim() === forbiddenTitle) {
        alert(`'${forbiddenTitle}' 제목은 사용할 수 없습니다.`);
        return;
      }

      const newTodo = {
        title: title.trim(),
        content: content.trim(),
        checked: false,
        createdAt: new Date().toISOString(),
      };

      const response = await axios.post('http://localhost:3000/todo', newTodo);
      setTodos((prevTodos) =>
        [response.data, ...prevTodos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      ); // 최신 순 정렬 후 상태 업데이트
    } catch (err) {
      console.error('Failed to add todo:', err.message);
      setError('할 일을 추가하는 데 실패했습니다.');
    }
  };

  // Todo 삭제
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error('Failed to delete todo:', err.message);
      setError('할 일을 삭제하는 데 실패했습니다.');
    }
  };

  // Todo 업데이트
  const updateTodo = async (id, updatedFields) => {
    try {
      const response = await axios.patch(`http://localhost:3000/todo/${id}`, updatedFields);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedFields } : todo
        )
      );
    } catch (err) {
      console.error('Failed to update todo:', err.message);
      setError('할 일을 업데이트하는 데 실패했습니다.');
    }
  };

  // 제목 기반 Todo 삭제
  const deleteTodoByTitle = async (title) => {
    try {
      const todosToDelete = todos.filter((todo) => todo.title === title);
      for (const todo of todosToDelete) {
        await axios.delete(`http://localhost:3000/todo/${todo.id}`);
      }
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
    } catch (err) {
      console.error('Failed to delete todos by title:', err.message);
      setError('특정 제목의 할 일을 삭제하는 데 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        deleteTodoByTitle,
        loading,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
