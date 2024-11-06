import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '30px'
      }}>My Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;