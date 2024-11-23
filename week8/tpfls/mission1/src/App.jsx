import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import ToDoDetail from './components/TodoDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoList />} /> {/* 메인 리스트 페이지 */}
        <Route path="/todo/:id" element={<ToDoDetail />} /> {/* 상세 페이지 */}
      </Routes>
    </Router>
  );
};

export default App;
