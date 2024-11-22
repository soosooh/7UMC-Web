import styled from "styled-components";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../apis/axiosInstance";

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: 768px) {
    width: 80%;
    padding: 0 20px;
  }
`;

const StyledInput = styled.input`
  width: 600px;
  height: 60px;
  margin-bottom: 30px;
  background-color: white;
  color: black;
  border: gray;

  @media (max-width: 768px) {
    width: 400px;
    height: 40px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 30px;
    font-size: 10px;
  }
`;

const StyledButton = styled.button`
  width: 605px;
  height: 60px;
  background-color: ${({ $isActive }) => ($isActive ? "#C0C3D8" : "#ededed")};
  color: ${({ $isActive }) => ($isActive ? "white" : "#a19d9d")};
  font-size: 24px;
  cursor: ${({ $isActive }) => ($isActive ? "pointer" : "not-allowed")};

  @media (max-width: 768px) {
    width: 400px;
    height: 40px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 30px;
    font-size: 10px;
  }
`;

const TitleInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();

  const {
    mutate: createTodo,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: async (newTodo) => {
      const { data } = await axiosInstance.post("/todo", newTodo);
      return data;
    },
    onSuccess: (newTodo) => {
      console.log("TODO 생성 성공:", newTodo);
      // React Query의 캐시를 최신화
      queryClient.invalidateQueries(["todos"]);
      setTitle("");
      setContent("");
    },
    onError: (error) => {
      console.error("TODO 생성 실패:", error.response?.data || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    createTodo({ title, content, checked: false });
  };

  const isActive = title.trim() !== "" && content.trim() !== "";

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요"
      />
      <StyledInput
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력해주세요"
      />
      <StyledButton type="submit" $isActive={isActive} disabled={!isActive}>
        {isLoading ? "Loading..." : "TODO 생성"}
      </StyledButton>
      {isError && (
        <p style={{ color: "red" }}>TODO 생성 실패. 다시 시도해주세요.</p>
      )}
    </InputContainer>
  );
};

export default TitleInput;
