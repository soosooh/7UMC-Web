// src/App.js
import React from 'react';
import TodoList from './pages/TodoList';
import { TodoProvider } from './contexts/TodoContent';

const App = () => {
    return (
        <TodoProvider>
            <div>
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default App;
