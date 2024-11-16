import React from 'react';
import Button from '../components/Button/Button';

const TodoItem = ({ todo, onDone, onEdit, onDelete, showEditButtons }) => {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '15px',
                borderBottom: '5px solid #B5D2ED',
                alignItems: 'center',
            }}
        >
            {todo.text}
            <div style={{ display: 'flex', gap: '10px' }}>
                {showEditButtons ? (
                    <>
                        <Button label="완료" onClick={onDone} />
                        <Button label="수정" onClick={onEdit} />
                    </>
                ) : (
                    <Button label="삭제" onClick={onDelete} />
                )}
            </div>
        </li>
    );
};

export default TodoItem;