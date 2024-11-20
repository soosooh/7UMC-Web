import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SubmitBtn, ErrorMsg, FormContainer, InputWrapper } from '../../styles/auth/authStyles';
import { useAuthForm } from '../../hooks/use-Form';
import { useNavigate } from 'react-router-dom';
import login from '../../api/auth/login';
import { useMutation } from '@tanstack/react-query';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10rem;

  h1 {
    display: inline;
    white-space: nowrap;
    text-align: center;
  }
`

const LoginPage = () => {
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid }, trigger } = useAuthForm('login');
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      console.log("🚀 ~ LoginPage ~ accessToken:", accessToken)
      console.log("🚀 ~ LoginPage ~ refreshToken:", refreshToken)
      navigate('/');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };


  return (
    <PageContainer>
      <h1>로그인</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type={"email"}
            {...register("email")}
            placeholder="이메일을 입력해주세요"
            onBlur={() => { trigger("email"); setIsVisibleEmail(true); }}
          />
          {isVisibleEmail && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type={"password"}
            {...register("password")}
            placeholder="비밀번호를 입력해주세요"
            onBlur={() => { trigger("password"); setIsVisiblePwd(true); }}
          />
          {isVisiblePwd && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
        </InputWrapper>
        <SubmitBtn type={"submit"} disabled={!isValid}>로그인</SubmitBtn>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;