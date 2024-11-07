import React, { useState } from 'react';
import { useTodos } from '../Context/TodoContext';

function TodoList() {
    const { todos, dispatch } = useTodos();
    const [newTodo, setNewTodo] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: newTodo, completed: false } });
            setNewTodo('');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    const handleEditTodo = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    const handleSaveEdit = (id) => {
        if (editingText.trim()) {
            dispatch({ type: 'EDIT_TODO', payload: { id, text: editingText } });
            setEditingId(null);
            setEditingText('');
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="새로운 할 일을 입력하세요"
            />
            <button onClick={handleAddTodo}>추가</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(todo.id)}>저장</button>
                                <button onClick={() => setEditingId(null)}>취소</button>
                            </>
                        ) : (
                            <>
                                <span
                                    onClick={() => handleToggleTodo(todo.id)}
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {todo.text}
                                </span>
                                <button onClick={() => handleEditTodo(todo.id, todo.text)}>수정</button>
                                <button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
