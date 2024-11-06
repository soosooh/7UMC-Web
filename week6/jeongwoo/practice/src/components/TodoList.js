import React from 'react';
import Button from './Button';
import Input from './Input';
import { useTodo } from '../context/TodoContext';
import '../styles/TodoList.css';

const TodoList = () => {
  // Context에서 필요한 상태와 함수들을 가져옴
  const {
    todos,
    input,
    editId,
    editText,
    setInput,
    setEditText,
    addTodo,
    deleteTodo,
    startEdit,
    saveEdit
  } = useTodo();

  return (
    <div className="todo-list">
      <h1 className="todo-title">My Todo List</h1>
      <div className="input-container">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
          className="todo-input"
        />
        <Button onClick={addTodo} className="add-button">할 일 등록</Button>
      </div>
      <ul className="todo-items">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {editId === todo.id ? (
              <>
                <span className="todo-number">{todo.id}.</span>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <Button onClick={saveEdit} className="save-button">저장</Button>
              </>
            ) : (
              <>
                <span className="todo-number">{todo.id}.</span>
                <span className="todo-text">{todo.text}</span>
                <div className="button-group">
                  <Button onClick={() => startEdit(todo.id, todo.text)} className="edit-button">수정</Button>
                  <Button onClick={() => deleteTodo(todo.id)} className="delete-button">삭제</Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
