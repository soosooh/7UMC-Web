import React, { useState } from "react";
import styled from "styled-components";
import TodoButton from "../button/todoButton";
import TodoInput from "../input/todoInput";

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
`;

const ItemTodo = ({ todo, onDelete, onEdit }) => {
    const [editValue, setEditValue] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        onEdit(todo.id, editValue);
        setIsEditing(false);
    };

    return (
        <ItemContainer>
            <TodoInput 
                value={isEditing ? editValue : todo.text} 
                onChange={isEditing ? (e) => setEditValue(e.target.value) : null} 
                readOnly={!isEditing}
            />
            <TodoButton text="삭제하기" onClick={() => onDelete(todo.id)} />
            {isEditing ? (
                <TodoButton text="수정 완료" onClick={handleEdit} />
            ) : (
                <TodoButton text="수정하기" onClick={() => setIsEditing(true)} />
            )}
        </ItemContainer>
    );
};

export default ItemTodo;
