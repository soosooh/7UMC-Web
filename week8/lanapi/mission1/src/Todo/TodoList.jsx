import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoForm from './TodoForm';
import TodoSearch from './TodoSearch';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const { todos, addTodo, loading, error } = useContext(TodoContext);
  const [query, setQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // 검색 필터링 로직
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

  // Todo 추가 핸들러
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
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>
        Todo List
      </h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoSearch query={query} onSearchChange={setQuery} />
      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : filteredTodos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>검색된 Todo가 없습니다.</p>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem key={todo.id || index} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
