import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css"; 

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
          <Route path="/create" element={<TodoForm />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
