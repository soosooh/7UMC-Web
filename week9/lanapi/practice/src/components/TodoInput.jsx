import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('할 일을 입력하세요!');
      return;
    }
    dispatch(addTodo(input));
    setInput('');
  };

  const inputStyle = {
    flexGrow: 1,
    padding: '12px',
    backgroundColor: '#ffffff',
    border: '3px solid #00B7FF',
    borderRadius: '8px',
    outline: 'none',
    marginRight: '10px',
  };

  const buttonStyle = {
    width: '40px',
    height: '40px',
    border: '3px solid #00B7FF', 
    borderRadius: '50%', 
    backgroundColor: 'transparent', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '30px',
    color: '#00B7FF',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#00B7FF',
    color: '#ffffff', 
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
        style={inputStyle}
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseEnter={(e) => {
          Object.assign(e.target.style, buttonHoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.target.style, buttonStyle);
        }}
      >
        +
      </button>
    </form>
  );
};

export default TodoInput;
