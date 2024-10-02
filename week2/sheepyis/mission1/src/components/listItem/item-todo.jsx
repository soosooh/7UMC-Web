import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import TodoButton from "../button/todoButton";
import TodoInput from "../input/todoInput";

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

const TodoContainer = styled.div`
    width: 50%;
    height: 3rem;
    font-size: 1rem;
    color: ${colors.inputColor};
    display: flex;
    align-items: center;
    border-bottom: 0.5vw solid ${colors.buttonColor};
`

const ItemTodo = ({ todo, onDelete, onEdit }) => {
    const [editValue, setEditValue] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        onEdit(todo.id, editValue);
        setIsEditing(false);
    };

    return (
        <ItemContainer>
            {isEditing ? (
                <TodoInput 
                    value={editValue} 
                    onChange={(e) => setEditValue(e.target.value)} 
                />
            ) : (
                <TodoContainer>{todo.text}</TodoContainer>
            )}
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
