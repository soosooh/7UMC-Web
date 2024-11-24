import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:3000/todo";

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
  color: #007bff;
  cursor: pointer;
`;

const Content = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  cursor: pointer;
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

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });
  const queryClient = useQueryClient();

  const updateTodo = async (updatedTodo) => {
    const response = await axios.patch(`${BASE_URL}/${updatedTodo.id}`, updatedTodo);
    return response.data;
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  };

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSave = () => {
    if (!editedTodo.title.trim() || !editedTodo.content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    updateMutation.mutate(editedTodo);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (!todo.id) {
      console.error("Todo ID가 존재하지 않습니다.", todo);
      return;
    }
    deleteMutation.mutate(todo.id);
  };

  return (
    <TodoItemContainer>
      <Checkbox
        type="checkbox"
        checked={todo.checked ?? false}
        onChange={() => updateMutation.mutate({ ...todo, checked: !todo.checked })}
      />
      {isEditing ? (
        <TextContainer>
          <Input
            value={editedTodo.title}
            onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
          />
          <Input
            value={editedTodo.content}
            onChange={(e) => setEditedTodo({ ...editedTodo, content: e.target.value })}
          />
        </TextContainer>
      ) : (
        <TextContainer>
          <Link to={`/todo/${todo.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <Title>{todo.title}</Title>
            <Content>{todo.content}</Content>
          </Link>
        </TextContainer>
      )}
      <ButtonContainer>
        {isEditing ? (
          <Button onClick={handleSave} disabled={updateMutation.isLoading}>
            {updateMutation.isLoading ? "저장 중..." : "수정완료"}
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>수정</Button>
        )}
        <Button onClick={handleDelete} disabled={deleteMutation.isLoading}>
          {deleteMutation.isLoading ? "삭제 중..." : "삭제"}
        </Button>
      </ButtonContainer>
    </TodoItemContainer>
  );
};

export default TodoItem;
