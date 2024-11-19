import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedContent, setEditedContent] = useState(todo.content);
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        if (onToggle) {
            onToggle(todo.id, !todo.checked);
        }
    };

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = () => {
        if (onEdit) {
            onEdit(todo.id, { title: editedTitle, content: editedContent });
        }
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(todo.id);
        }
    };

    const handleNavigate = () => {
        navigate(`/todo/${todo.id}`);
    };

    return (
        <TodoWrapper>
            <LeftDiv>
                <Checkbox
                    type="checkbox"
                    checked={todo.checked}
                    onChange={handleCheckboxChange}
                />
                {isEditing ? (
                    <TextWrapper>
                        <EditableText
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />

                        <EditableText
                            type="text"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                        />
                    </TextWrapper>
                ) : (
                    <TextWrapper onClick={handleNavigate}>
                        <Text>{todo.title}</Text>
                        <Text>{todo.content}</Text>
                    </TextWrapper>
                )}
            </LeftDiv>
            <ButtonWraaper>
                {isEditing ? (
                    <StyledButton onClick={handleSave}>저장</StyledButton>
                ) : (
                    <StyledButton onClick={handleEditToggle}>수정</StyledButton>
                )}
                <StyledButton onClick={handleDelete}>삭제</StyledButton>
            </ButtonWraaper>
        </TodoWrapper >
    );
};

export default TodoItem;

const TodoWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  gap: 0.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 8px;
  align-self: center;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const Text = styled.p`
  padding: 0;
  margin: 0;
`
const ButtonWraaper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 425px){
    display: none;
  }
`
const StyledButton = styled.div`
  padding: 0.5rem 1.5rem;
  background: lightgray;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-self: center;
`
const Checkbox = styled.input`
  cursor: pointer;
`
const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
const EditableText = styled.input`
  border: 1px dashed lightgray;
  border-radius: 4px;
  padding: 0.25rem;
  width: 100%;
`