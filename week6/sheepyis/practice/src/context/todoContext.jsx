import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (text) => {
        setTodos([...todos, { text, id: Date.now() }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
}
