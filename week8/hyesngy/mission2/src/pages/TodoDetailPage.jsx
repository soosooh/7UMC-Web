import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import getTodoById from "../apis/todo/getTodoById";
import updateTodo from "../apis/todo/updateTodo";
import deleteTodo from "../apis/todo/deleteTodo";
import Spinner from "../components/common/spinner";
import ErrorSpinner from "../components/common/errorSpinner";
import EditField from "../components/TodoDetail/EditField";

const TodoDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [editedData, setEditedData] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState({ title: false, content: false });


  const { data: todo, isLoading, isError } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodoById(id),
  });

  const { mutate: updateTodoMutation } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo", id]);
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.error("🚀 ~ Update Error ~ error:", error);
    },
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      alert("삭제되었습니다.");
      queryClient.invalidateQueries(["todos"]);
      navigate("/");
    },
    onError: (error) => {
      console.error("🚀 ~ Delete Error ~ error:", error);
    },
  });

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
    setEditedData((prev) => ({ ...prev, [field]: todo[field] }));
  };

  const handleSave = (field) => {
    const updatedTodo = { id, [field]: editedData[field] };
    updateTodoMutation(updatedTodo);
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleChecked = () => {
    const updatedTodo = { id, checked: !todo.checked };
    updateTodoMutation(updatedTodo);
  };

  const handleDelete = () => {
    deleteTodoMutation(id);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;

  return (
    <DetailWrapper>
      <CloseButton onClick={() => navigate(-1)}>✖</CloseButton>
      <CheckboxWrapper>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={handleToggleChecked}
        />
        <span>{todo.checked ? "완료됨" : "미완료"}</span>
      </CheckboxWrapper>
      <EditField
        value={isEditing.title ? editedData.title : todo.title}
        isEditing={isEditing.title}
        onEdit={() => handleEdit("title")}
        onSave={() => handleSave("title")}
        onChange={(e) => handleChange("title", e.target.value)}
      />
      <EditField
        value={isEditing.content ? editedData.content : todo.content}
        isEditing={isEditing.content}
        onEdit={() => handleEdit("content")}
        onSave={() => handleSave("content")}
        onChange={(e) => handleChange("content", e.target.value)}
      />
      <DateP>생성 날짜: {todo.createdAt?.slice(0, 10)}</DateP>
      <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
    </DetailWrapper>
  );
};

export default TodoDetailPage;

const DetailWrapper = styled.div`
  padding: 2rem;
  border: 1px solid lightgray;
  border-radius: 8px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`
const EditButton = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  border: none;
  background-color: dodgerblue;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  &:hover {
    background-color: darkblue;
  }
`
const DeleteButton = styled(EditButton)`
  background-color: red;
  bottom: 3rem;
  right: 2rem;
  &:hover {
    background-color: hotpink;
  }
`
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom:1.5rem;
`
const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: gray;

  &:hover {
    color: black;
  }
`
const DateP = styled.p`
  margin-top: 2rem;
`