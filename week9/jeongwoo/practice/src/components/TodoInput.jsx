import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { add } from '../redux/todoSlice';

const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #f8f9fa;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4285f4;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const AddButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: #4285f4;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3367d6;
  }
`;

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(add(text));
      setText('');
    } else {
      alert('할 일을 입력해주세요!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <AddButton type="submit">+</AddButton>
      </InputWrapper>
    </Form>
  );
};

export default TodoInput;