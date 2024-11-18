// src/contexts/TodoContext.js
import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [activeTodos, setActiveTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);

    const addTodo = (todo) => {
        setActiveTodos([...activeTodos, { text: todo }]);
    };

    const markAsDone = (index) => {
        const newActiveTodos = [...activeTodos];
        const todo = newActiveTodos.splice(index, 1)[0];
        setActiveTodos(newActiveTodos);
        setDoneTodos([...doneTodos, todo]);
    };

    const deleteTodo = (index) => {
        const newDoneTodos = [...doneTodos];
        newDoneTodos.splice(index, 1);
        setDoneTodos(newDoneTodos);
    };

    const editTodo = (index) => {
        const newText = prompt("수정할 내용을 입력하세요:", activeTodos[index].text);
        if (newText !== null) {
            const newActiveTodos = [...activeTodos];
            newActiveTodos[index].text = newText;
            setActiveTodos(newActiveTodos);
        }
    };

    return (
        <TodoContext.Provider value={{ activeTodos, doneTodos, addTodo, markAsDone, deleteTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
