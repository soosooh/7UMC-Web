import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        marginBottom: '20px'
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #2196F3',
            borderRadius: '4px 0 0 4px'
          }}
        />
        <button 
          onClick={addTodo}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer'
          }}
        >
          추가
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
          onEdit={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;