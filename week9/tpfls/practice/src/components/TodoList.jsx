import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, remove } from '../redux/todoSlice';

export default function TodoList() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const styles = {
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      maxWidth: '400px',
      margin: '20px auto',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 15px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    checkbox: {
      width: '20px',
      height: '20px',
      color:'#9193A2',
    },
    text: {
      flex: 1,
      marginLeft: '10px',
      fontSize: '16px',
      color: '#9193A2',
    },
    completed: {
      textDecoration: 'line-through',
      color: '#6c757d',
    },
    deleteButton: {
      backgroundColor: '#FFFFFF',
      color: '#fff',
      border: 'none',
      
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      
    },
  };

  return (
    <ul style={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} style={styles.item}>
          <input
            type="checkbox"
            style={styles.checkbox}
            checked={todo.completed}
            onChange={() => dispatch(toggle(todo.id))}
          />
          <span style={todo.completed ? styles.completed : styles.text}>
            {todo.text}
          </span>
          <button
            style={styles.deleteButton}
            onClick={() => dispatch(remove(todo.id))}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}
