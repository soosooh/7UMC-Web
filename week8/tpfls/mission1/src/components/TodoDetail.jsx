import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ToDoDetail = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const todos = JSON.parse(localStorage.getItem('todos')) || []; // localStorage에서 todos 가져오기
  const todo = todos.find((todo) => todo.id === Number(id)); // id로 해당 ToDo 찾기

  if (!todo) {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>⚡ UMC ToDoList ⚡</h1>
        <p style={styles.error}>ToDo를 찾을 수 없습니다.</p>
        <Link to="/" style={styles.backLink}>← 뒤로가기</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>⚡ UMC ToDoList ⚡</h1>
      <div style={styles.detailBox}>
        <p><strong>Id:</strong> {todo.id}</p>
        <p><strong>{todo.title}</strong></p>
        <p>{todo.content}</p>
        <p><strong>생성일:</strong> {new Date(todo.date).toLocaleString()}</p>
        <p><strong>상태:</strong> {todo.completed ? '완료' : '미완료'}</p>
      </div>
      <Link to="/" style={styles.backLink}>← 뒤로가기</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    color: 'black',
    marginBottom: '20px',
  },
  detailBox: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'left',
  },
  backLink: {
    display: 'block',
    marginTop: '20px',
    color: 'black',
    textDecoration: 'none',
  },
  error: {
    color: 'red',
    marginTop: '20px',
  },
};

export default ToDoDetail;
