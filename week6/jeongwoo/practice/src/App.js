import React from 'react';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';
import './App.css';

function App() {
  return (
    // 최상위 컴포넌트에 TodoProvider 추가
    <TodoProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;