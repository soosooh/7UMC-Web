import React, { useState, useEffect } from 'react';
import Form from './Form';
import ToDoItem from './ToDoItem';
import LoadingSpinner from './LoadingSpinner';
import styles from '../styles/ToDoListStyles';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 컴포넌트가 마운트될 때 localStorage에서 todos를 불러옴
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true); // 로딩 시작
      try {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos)); // localStorage의 데이터를 상태로 설정
        }
      } catch (err) {
        setError('데이터를 불러오는 중 문제가 발생했습니다.'); // 에러 설정
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (title, content) => {
    // 제목 또는 내용이 비어있는 경우 에러 발생
    if (!title.trim() || !content.trim()) {
      setError('에러가 발생했습니다'); // 에러 메시지 설정
      return;
    }

    // 정상적인 ToDo 추가 로직
    const newTodo = { id: Date.now(), title, content, completed: false, date: new Date() };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // localStorage 업데이트
      return updatedTodos;
    });

    setError(null); // 에러 상태 초기화
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // localStorage 업데이트
      return updatedTodos;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // localStorage 업데이트
      return updatedTodos;
    });
  };

  const editTodo = (id, newTitle, newContent) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, content: newContent } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // localStorage 업데이트
      return updatedTodos;
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>⚡ UMC ToDoList ⚡</h1>
      <Form onAddTodo={addTodo} />
      {loading && <LoadingSpinner />} {/* 로딩 중 컴포넌트 렌더링 */}
      {error && (
        <div style={styles.errorContainer}>
          <div style={styles.errorIcon}>❌</div>
          <p style={styles.errorMessage}>{error}</p>
        </div>
      )}
      {!loading && (
        <div>
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              onEdit={editTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
