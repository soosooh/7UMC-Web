import React, { useState } from 'react';
import styled from 'styled-components';
import addTodo from '../apis/todo/addTodo';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const { mutate: addNewTodo } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setTitle("");
      setContent("");
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleAddTodo = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }
    addNewTodo({ title, content });
  };


  return (
    <InputDiv>
      <StyledInput
        type='text'
        placeholder='제목을 입력해주세요'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <StyledInput
        type='text'
        placeholder='내용을 입력해주세요'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <StyledButton onClick={handleAddTodo} disabled={!title || !content}>등록</StyledButton>
    </InputDiv>
  );
};

export default Input;

const InputDiv = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  gap: 0.5rem;
`
const StyledInput = styled.input`
  border: 1px solid lightgray;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  &:hover {
    border: 1px solid lightblue;
  }
`
const StyledButton = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  background: ${(props) => (props.disabled ? "lightgray" : "dodgerblue")};
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#aaa" : "white")};
  box-sizing: border-box;
  &:hover {
    background: ${(props) => (props.disabled ? "lightgray" : "darkblue")};
  }
`