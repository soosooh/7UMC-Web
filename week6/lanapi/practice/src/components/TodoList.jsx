// src/components/TodoList.jsx
import React, { useContext, useState } from 'react';
import { TodoContext } from '../components/TodoContext';
import TodoItem from './TodoItem';
import Input from './Input';
import Button from './Button';

function TodoList() {
  const { todos, addTodo, deleteTodo, updateTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '24px',
        color: '#1f2937',
      }}>
        Todo-List
      </h1>
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
      }}>
        <div style={{ flex: 1 }}>
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="할 일을 입력하세요"
          />
        </div>
        <Button onClick={handleAddTodo} text="추가" />
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
