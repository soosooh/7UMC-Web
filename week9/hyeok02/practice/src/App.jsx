import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, complete } from './redux/TodoSlice';

function App() {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() === '') return;
    dispatch(add(task));
    setTask('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo List</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: '5px', marginRight: '5px' }}
        />
        <button onClick={handleAdd} style={{ padding: '5px 10px' }}>
          Add Task
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '5px' }}>
            <span
              style={{
                textDecoration: todo.complete ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(complete(todo.id))}>
              {todo.complete ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => dispatch(remove(todo.id))}
              style={{ marginLeft: '5px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
