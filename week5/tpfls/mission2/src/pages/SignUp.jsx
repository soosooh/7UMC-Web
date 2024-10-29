import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 유효성 검사 스키마 정의
const schema = z.object({
  email: z.string().email('유효한 이메일 형식이어야 합니다.').nonempty('이메일을 반드시 입력해주세요.'),
  password: z.string()
    .min(8, '비밀번호는 8자리 이상이어야 합니다.')
    .max(16, '비밀번호는 16자리 이하이어야 합니다.')
    .nonempty('비밀번호는 필수 입력 요소입니다.'),
  passwordCheck: z.string().nonempty('비밀번호 확인은 필수 입력 요소입니다.'),
  gender: z.enum(['male', 'female', 'other'], '성별을 선택해주세요.'),
  birthdate: z.string().nonempty('생년월일을 입력해주세요.'),
}).superRefine(({ password, passwordCheck }, ctx) => {
  if (password !== passwordCheck) {
    ctx.addIssue({
      path: ['passwordCheck'],
      message: '비밀번호가 일치하지 않습니다.',
    });
  }
});

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
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
        
        <Select {...register('gender')}>
          <option value="">성별을 선택해 주세요!</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
          <option value="other">기타</option>
        </Select>
        {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}

        <Input
          type="date"
          {...register('birthdate')}
        />
        {errors.birthdate && <ErrorMessage>{errors.birthdate.message}</ErrorMessage>}
        
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
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 22px;
  margin: 10px 0;
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 22px;
  margin: 10px 0;
  width: 300px;
  border: none;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
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
