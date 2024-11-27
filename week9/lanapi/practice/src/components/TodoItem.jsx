import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    backgroundColor: todo.completed ? '#e0ffe0' : '#fff',
    textDecoration: todo.completed ? 'line-through' : 'none',
    color: todo.completed ? '#555' : '#000',
  };

  const circleButtonStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: `2px solid ${todo.completed ? '#4CAF50' : '#007bff'}`,
    backgroundColor: todo.completed ? '#4CAF50' : 'transparent',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const buttonStyle = {
    marginLeft: '8px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: '#007bff',
  };

  return (
    <li style={itemStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          style={circleButtonStyle}
          onClick={() => dispatch(toggleTodo(todo.id))}
          aria-label="Toggle Complete"
        />
        <span
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ cursor: 'pointer' }}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        style={buttonStyle}
        aria-label="Delete"
      >
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;

