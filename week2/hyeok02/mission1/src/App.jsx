import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Todo from './components/Todo-list';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;