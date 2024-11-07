import React from 'react';
import TodoList from '../components/TodoList';

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#1f2937',
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          To-Do List
        </h1>
        <TodoList />
      </div>
    </div>
  );
}

export default Home;