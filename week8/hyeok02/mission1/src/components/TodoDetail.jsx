import React, { useState } from "react";
import styled from "styled-components";
import { useFetchTodos } from "../hooks/useFetchTodos";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: todo, error, loading } = useFetchTodos(`/${id}`);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/todo/${id}`);
    navigate("/");
  };

  const handleUpdate = async () => {
    await axios.patch(`http://localhost:3000/todo/${id}`, {
      checked: !todo.checked,
    });
    window.location.reload();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DetailContainer>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
      <p>Checked: {todo.checked ? "Yes" : "No"}</p>
      <Button onClick={handleUpdate}>Toggle Complete</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </DetailContainer>
  );
};

export default TodoDetail;
