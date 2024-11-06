import React, { createContext, useContext, useReducer } from 'react';

const initialState = [];
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        default:
            return state;
    }
};

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
