import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';

export default function InputTodo() {
  const dispatch = useDispatch();
  const [todolist, setTodolist] = useState({ text: '' });

  const handleText = (e) => setTodolist({ text: e.target.value });

  const onReset = () => setTodolist({ text: '' });

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '400px',
      margin: '20px auto',
    },
    
    inputWrapper: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    textbar: {
      flex: 1,
      padding: '10px 15px',
      borderRadius: '20px',
      border: `2px solid #00B7FF`, // 테두리 색상
      outline: 'none',
      fontSize: '16px',
      color: '#333',
      backgroundColor: 'transparent',
    },
    submitButton: {
      backgroundColor: 'transparent',
      border: `2px solid #00B7FF`,
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      color: '#00B7FF',
      cursor: 'pointer',
      marginLeft: '10px',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todolist.text !== '') {
      dispatch(add(todolist.text));
      onReset();
    } else {
      alert('할 일을 입력해주세요!');
    }
  };

  return (
    <div style={styles.container}>
      
      <form style={styles.inputWrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          style={styles.textbar}
          value={todolist.text}
          onChange={handleText}
          placeholder="리액트 공부하기"
        />
        <button type="submit" style={styles.submitButton}>
          +
        </button>
      </form>
    </div>
  );
}
