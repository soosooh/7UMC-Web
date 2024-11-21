import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoDetails from './pages/TodoDetails';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;


