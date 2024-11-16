// src/components/TodoSection.js
import React, { useContext } from 'react';
import TodoItem from '../components/TodoItem';
import { TodoContext } from '../contexts/TodoContent';

const TodoSection = ({ title, todos }) => {
    const { markAsDone, deleteTodo, editTodo } = useContext(TodoContext);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '48%',
            textAlign: 'center',
            fontWeight: 700,
        }}>
            <div style={{
                padding: '4px',
                borderBottom: '1.9px solid #B5D2ED',
                width: '30%',
                fontSize: '24px',
            }}>{title}</div>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index}
                        todo={todo}
                        onDone={() => markAsDone(index)}
                        onEdit={() => editTodo(index)}
                        onDelete={() => deleteTodo(index)}
                        showEditButtons={title === "해야 할 일"}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoSection;
