import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>할 일이 없습니다.</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;

