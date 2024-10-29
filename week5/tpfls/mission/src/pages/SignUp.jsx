import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 유효성 검사 스키마 정의
const schema = yup.object().shape({
  email: yup
    .string()
    .email('유효한 이메일 형식이어야 합니다.')
    .required('이메일을 반드시 입력해주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자리 이상이어야 합니다.')
    .max(16, '비밀번호는 16자리 이하이어야 합니다.')
    .required('비밀번호는 필수 입력 요소입니다.'),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 검증 또한 필수 입력 요소입니다.'),
});

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // 실시간 유효성 검사
  });

  const onSubmit = (data) => {
    console.log('회원가입 데이터:', data);
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="이메일을 입력해 주세요!"
          {...register('email')}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요!"
          {...register('password')}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해 주세요!"
          {...register('passwordCheck')}
        />
        {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}
        
        <LoginButton type="submit" disabled={!isValid}>제출</LoginButton>
      </Form>
    </Container>
  );
};

// 스타일링
const Container = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
  height: 90vh;
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

const Form = styled.form`
  display: flex;
  flex-direction: column; /* 입력 필드를 세로로 배열 */
  align-items: center; /* 중앙 정렬 */
`;

const Input = styled.input`
  padding: 22px;
  margin: 10px 0;
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px; /* 에러 메시지 위치 조정 */
  margin-bottom: 10px; /* 에러 메시지와 입력 필드 간격 조정 */
`;

const LoginButton = styled.button`
  padding: 10px 140px;
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

export default SignUpPage;
