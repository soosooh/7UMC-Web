import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/globalStyles';

import Todo from './pages/todo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;