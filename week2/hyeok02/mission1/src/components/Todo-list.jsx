import React, { useState, useEffect } from 'react';
import { injectGlobalStyles } from '../styles/Global';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  useEffect(() => {
    injectGlobalStyles();
  }, []);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setIsEditing(index);
    setEditedTask(tasks[index]);
  };

  const saveTask = (index) => {
    const newTasks = tasks.map((t, i) => (i === index ? editedTask : t));
    setTasks(newTasks);
    setIsEditing(null);
  };

  return (
    <div className="body">
      <h2 className="heading">Todo List</h2>
      <input
        className="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button className="button" onClick={addTask}>추가하기</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="card">
            {isEditing === index ? (
              <input
                className="input"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <span>{t}</span>
            )}
            <button className="button" onClick={() => removeTask(index)}>삭제</button>
            {isEditing === index ? (
              <button className="button" onClick={() => saveTask(index)}>수정 완료</button>
            ) : (
              <button className="button" onClick={() => editTask(index)}>수정하기</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
