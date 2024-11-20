import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDeleteTodo, useUpdateTodo } from '../hooks/useTodoApi';

const ItemContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Checkbox = styled.input`
  margin-right: 1rem;
  transform: scale(1.5);
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Content = styled.p`
  margin: 0.5rem 0 0;
  color: #888;
  font-size: 0.9rem;
`;

const EditInput = styled.input`
  padding: 0.2rem;
  margin-bottom: 0.1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

const DeleteButton = styled(EditButton)`
  background-color: gray;

  &:hover {
    background-color: #e53935;
  }
`;

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState({
    title: todo.title,
    content: todo.content,
  });
  const navigate = useNavigate();
  const deleteTodoMutation = useDeleteTodo();
  const updateTodoMutation = useUpdateTodo();

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTodo({ ...editTodo, [name]: value });
  };

  const handleSave = () => {
    updateTodoMutation.mutate({ id: todo.id, updates: editTodo });
    setIsEditing(false);
  };

  return (
    <ItemContainer>
      <Checkbox
        type="checkbox"
        checked={todo.checked}
        onChange={() =>
          updateTodoMutation.mutate({
            id: todo.id,
            updates: { checked: !todo.checked },
          })
        }
      />
      <ContentContainer>
        {isEditing ? (
          <>
            <EditInput
              type="text"
              name="title"
              value={editTodo.title}
              onChange={handleEditChange}
              placeholder="제목을 입력하세요"
            />
            <EditInput
              type="text"
              name="content"
              value={editTodo.content}
              onChange={handleEditChange}
              placeholder="내용을 입력하세요"
            />
          </>
        ) : (
          <>
            <Title onClick={() => navigate(`/todo/${todo.id}`)}>
              {todo.title}
            </Title>
            <Content>{todo.content}</Content>
          </>
        )}
      </ContentContainer>
      <ButtonContainer>
        {isEditing ? (
          <EditButton onClick={handleSave}>완료</EditButton>
        ) : (
          <EditButton onClick={() => setIsEditing(true)}>수정</EditButton>
        )}
        <DeleteButton onClick={() => deleteTodoMutation.mutate(todo.id)}>
          삭제
        </DeleteButton>
      </ButtonContainer>
    </ItemContainer>
  );
}

export default TodoItem;
