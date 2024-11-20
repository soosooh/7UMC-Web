import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/todoList';
import DetailPage from './pages/detailPage';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #e3f2fd;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
