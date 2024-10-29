import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8 && value.length <= 16;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError('비밀번호는 8자리 이상 16자리 이하이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const isFormValid = validateEmail(email) && validatePassword(password);

  return (
    <Container>
      <Title>로그인</Title>
      <Input
        type="email"
        placeholder="이메일을 입력해 주세요!"
        value={email}
        onChange={handleEmailChange}
        onFocus={() => setEmailError('')}
      />
      {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      <Input
        type="password"
        placeholder="비밀번호를 입력해 주세요!"
        value={password}
        onChange={handlePasswordChange}
        onFocus={() => setPasswordError('')}
      />
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      <LoginButton disabled={!isFormValid}>로그인</LoginButton>
    </Container>
  );
};

// 스타일링
const Container = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
  height: 80vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
`;

const Input = styled.input`
  padding: 22px;
  margin: 15px 0;
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-right: 20px;
`;

const LoginButton = styled.button`
  padding: 10px 135px;
  background: ${props => props.disabled ? 'gray' : '#FF073D'};
  margin-top: 20px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => !props.disabled && 'blue'};
  }
`;

export default LoginPage;
