import React, { useState } from 'react';
import styles from '../styles/ToDoListStyles';

const Form = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title, content); // 제목과 내용을 부모로 전달
    setTitle(''); // 입력 필드 초기화
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.addButton}>
        ToDo 생성
      </button>
    </form>
  );
};

export default Form;
