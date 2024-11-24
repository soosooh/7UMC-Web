import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:3000/todo";

const FormContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const postTodo = async (newTodo) => {
    const response = await axios.post(BASE_URL, newTodo);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    mutation.mutate({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" disabled={mutation.isLoading || !title.trim() || !content.trim()}>
          {mutation.isLoading ? "저장 중..." : "제출하기"}
        </Button>
      </form>
    </FormContainer>
  );
};

export default TodoForm;
