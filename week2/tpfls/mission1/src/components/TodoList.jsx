import React, { useState } from 'react';
import InputTodo from '../components/Input/Inputtodo';
import TodoSection from '../components/TodoSection';

const TodoList = () => {
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
        <div style={{
            background: '#E1E7F5',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 700,
                paddingTop: '139px',
                paddingBottom: '72px',
                margin: '12px auto',
                width: '70%',
                borderBottom: '1.5px solid #B5D2ED',
            }}>UMC Study Plan</div>
            <InputTodo addTodo={addTodo} />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '50%',
                margin: '0 auto',
            }}>
                <TodoSection
                    title="해야 할 일"
                    todos={activeTodos}
                    onAction={markAsDone}
                    onEdit={editTodo}
                />
                <TodoSection
                    title="해낸 일"
                    todos={doneTodos}
                    onDelete={deleteTodo}
                />
            </div>
        </div>
    );
};

export default TodoList;