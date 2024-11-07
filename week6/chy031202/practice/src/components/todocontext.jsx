import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
        { id: 1, task: "투두만들기" },
        { id: 2, task: "희연 혜원 혜윤 건 찬민" }
    ]);

    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState('');
    const [editText, setEditText] = useState('');

    const addTodo = () => {
        if (text.trim().length === 0) {
            alert('입력하라1');
        }
        setTodos((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100) * 2, task: text },
        ]);
        setText('');
    };

    // 2 삭제
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    //3 수정하기
    const updateTodo = (id, text) => {
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: text } : item))
        );
        setEditingId('');
    };


    return (
        <>
            <TodoContext.Provider
                value={{
                    todos,
                    text,
                    setText,
                    editingId,
                    setEditingId,
                    editText,
                    setEditText,
                    addTodo,
                    deleteTodo,
                    updateTodo,
                }}
            >
                {children}
            </TodoContext.Provider>
        </>
    );
}