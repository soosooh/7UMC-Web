import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isDisabled = !title.trim() || !content.trim();

  return (
    <>
      <InputContainer>
        <Input placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} />
      </InputContainer>

      <Button text="ToDo 생성" margin="1.85vw 0 3.6vw 0" disabled={isDisabled} />
    </>
  );
};

export default Add;
