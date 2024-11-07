import React from 'react';
import { TodoProvider } from './Context/TodoContext';
import TodoList from './components/Todo-list';

function App() {
    return (
        <TodoProvider>
            <div className="App">
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;
