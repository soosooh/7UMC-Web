import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { useState } from 'react';
import { loginUser } from '../apis/authService';
import { useMutation } from '@tanstack/react-query';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: black;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const InputContainer = styled.div`
  position: relative;
  height: 80px;
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px rgba(255, 105, 135, 0.6);
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  width: 100%;
  background-color: ${(props) => (props.disabled ? 'gray' : '#ff4d78')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? 'gray' : '#ff1c47')};
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d78;
  font-size: 0.875rem;
  margin: 4px 0 0 0;
  position: absolute;
  bottom: 0;
`;

const LoginPage = () => {
  const [error, setError] = useState('');

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('이메일을 반드시 입력해주세요.')
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        '올바른 이메일 형식이 아닙니다.'
      ),
    password: yup
      .string()
      .required('비밀번호를 반드시 입력해주세요.')
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleBlur = (field) => {
    trigger(field);
  };

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      window.location.href = '/movies';
    },
    onError: (error) => {
      setError(error.response?.data?.message || '로그인에 실패했습니다.');
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인</Title>
        <InputContainer>
          <Input
            type="email"
            placeholder="이메일"
            {...register('email')}
            onBlur={() => handleBlur('email')}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호"
            {...register('password')}
            onBlur={() => handleBlur('password')}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputContainer>
        <SubmitButton type="submit" disabled={!isValid}>
          로그인
        </SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </FormContainer>
  );
};

export default LoginPage;
