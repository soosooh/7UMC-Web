import React from 'react';
import TodoList from '../components/TodoList/TodoList';

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '40px 20px',
    }}>
        <TodoList />
    </div>
  );
}

export default Home;


