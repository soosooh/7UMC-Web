// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import { TodoProvider } from '../src/components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
