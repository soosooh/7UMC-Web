import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import TodoForm from './TodoForm';
import TodoSearch from './TodoSearch';
import TodoItem from '../TodoItem/TodoItem';
import ErrorScreen from '../animation/ErrorScreen';
import LoadingScreen from '../animation/LoadingScreen';

function TodoList() {
  const { todos, addTodo, loading, error } = useContext(TodoContext);
  const [query, setQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter(
        (todo) =>
          todo.title && todo.title.toLowerCase().includes(query.trim().toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [query, todos]);

  useEffect(() => {
    if (error) {
      setIsErrorVisible(true);
      // 3초 후 에러 애니메이션이 사라지고 원래 상태로 돌아옴
      const timeout = setTimeout(() => {
        setIsErrorVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleAddTodo = ({ title, content }) => {
    const newTodo = {
      id: `${Date.now()}-${Math.random()}`,
      title: title.trim(),
      content: content.trim(),
      checked: false,
    };
    addTodo(newTodo.title, newTodo.content);
    setFilteredTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        Todo List
      </h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoSearch query={query} onSearchChange={setQuery} />
      {loading ? (
        <LoadingScreen /> // 로딩 애니메이션 표시
      ) : isErrorVisible ? (
        <ErrorScreen /> // 에러 애니메이션 표시
      ) : filteredTodos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>
          검색된 Todo가 없습니다.
        </p>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem key={todo.id || index} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
