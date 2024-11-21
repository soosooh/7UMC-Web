import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';
import { TodoProvider } from './context/TodoContext';
import GlobalStyle from './styles/GlobalStyle';
import { IndexStyle } from './styles/index';
import { AppContainer } from './styles/App';

function App() {
  return (
    <Router>
      <TodoProvider>
        <GlobalStyle />
        <IndexStyle />
        <AppContainer>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
          </Routes>
        </AppContainer>
      </TodoProvider>
    </Router>
  );
}

export default App;