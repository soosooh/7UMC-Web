import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form'; // useForm 훅을 사용

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' }); // 'onBlur' 모드 설정으로 유효성 검사 트리거 설정

  const onSubmit = (data) => {
    console.log('로그인 정보:', data);
    // 로그인 처리 로직 추가
  };

  return (
    <Container>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="이메일을 입력해 주세요!"
          {...register('email', {
            required: '이메일은 필수 항목입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요!"
          {...register('password', {
            required: '비밀번호는 필수 항목입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자리 이상이어야 합니다.',
            },
            maxLength: {
              value: 16,
              message: '비밀번호는 16자리 이하이어야 합니다.',
            },
          })}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        
        <LoginButton type="submit" disabled={!isValid}>로그인</LoginButton>
      </form>
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
