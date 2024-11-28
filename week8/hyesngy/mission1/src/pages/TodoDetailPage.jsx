import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import getTodoById from "../apis/todo/getTodoById";
import updateTodo from "../apis/todo/updateTodo";
import deleteTodo from "../apis/todo/deleteTodo";
import Spinner from "../components/common/spinner";
import ErrorSpinner from "../components/common/errorSpinner";
import EditField from "../components/TodoDetail/EditField";

const TodoDetailPage = () => {
  const { id } = useParams();
  const { data: todo, setData: setTodo, loading, error } = useFetch(() => getTodoById(id));
  const [editedData, setEditedData] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ title: todo.title, content: todo.content });
  };

  const handleSave = async () => {
    const updatedTodo = { ...todo, ...editedData };
    await updateTodo(id, updatedTodo);
    setTodo(updatedTodo);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleChecked = async () => {
    try {
      const updatedTodo = { ...todo, checked: !todo.checked };
      await updateTodo(id, updatedTodo);
      setTodo(updatedTodo);
    } catch (error) {
      console.error("🚀 ~ handleToggleChecked ~ error:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
      alert("삭제되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("🚀 ~ handleDelete ~ error:", error);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorSpinner />;

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
        value={isEditing ? editedData.title : todo.title}
        isEditing={isEditing}
        onChange={(e) => handleChange("title", e.target.value)}
      />
      <EditField
        value={isEditing ? editedData.content : todo.content}
        isEditing={isEditing}
        onChange={(e) => handleChange("content", e.target.value)}
      />

      <FooterDiv>
        <DateP>생성 날짜: {todo.createdAt?.slice(0, 10)}</DateP>
        {isEditing ? (
          <EditButton onClick={handleSave}>저장</EditButton>
        ) : (
          <EditButton onClick={handleEdit}>수정</EditButton>
        )}
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </FooterDiv>
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
  right: 5.5rem;
  bottom: 3rem;
  &:hover {
    background-color: darkblue;
  }
`
const DeleteButton = styled(EditButton)`
  background-color: red;
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
const FooterDiv = styled.div`
  margin-top: 3rem;
`