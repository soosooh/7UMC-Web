import React, { useState } from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const Content = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; 
`;

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [editedTodo, setEditedTodo] = useState({ ...todo }); 

  const handleSave = () => {
    onUpdate(editedTodo); 
    setIsEditing(false); 
  };

  return (
    <TodoItemContainer>
      <Checkbox
        type="checkbox"
        checked={todo.checked}
        onChange={() => onUpdate({ ...todo, checked: !todo.checked })}
      />
      {isEditing ? (
        <TextContainer>
          <Input
            value={editedTodo.title}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, title: e.target.value })
            }
          />
          <Input
            value={editedTodo.content}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, content: e.target.value })
            }
          />
        </TextContainer>
      ) : (
        <TextContainer>
          <Title>{todo.title}</Title>
          <Content>{todo.content}</Content>
        </TextContainer>
      )}
      <ButtonContainer>
        {isEditing ? (
          <Button onClick={handleSave}>수정완료</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>수정</Button>
        )}
        <Button onClick={() => onDelete(todo.id)}>삭제</Button>
      </ButtonContainer>
    </TodoItemContainer>
  );
};

export default TodoItem;
