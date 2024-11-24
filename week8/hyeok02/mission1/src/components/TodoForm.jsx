import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 90%;
  }
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
  let debounceTimer;

  const handleDebouncedChange = (e, setter) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setter(e.target.value);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    console.log("제출됨:", { title, content });
    setTitle("");
    setContent("");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => handleDebouncedChange(e, setTitle)}
        />
        <Input
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => handleDebouncedChange(e, setContent)}
        />
        <Button type="submit" disabled={!title || !content}>
          제출하기
        </Button>
      </form>
    </FormContainer>
  );
};

export default TodoForm;
