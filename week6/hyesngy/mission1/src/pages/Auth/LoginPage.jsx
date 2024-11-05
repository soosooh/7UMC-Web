import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SubmitBtn, ErrorMsg, FormContainer } from '../../styles/auth/authStyles';
import { useAuthForm } from '../../hooks/use-Form';
import { useNavigate } from 'react-router-dom';
import login from '../../api/auth/login';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10rem;
`

const LoginPage = () => {
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid }, trigger } = useAuthForm('login');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { accessToken, refreshToken } = await login(data);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      console.log("🚀 ~ onSubmit ~ refreshToken:", refreshToken)
      console.log("🚀 ~ onSubmit ~ accessToken:", accessToken)
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <PageContainer>
      <h1>로그인</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type={"email"}
          {...register("email")}
          placeholder="이메일을 입력해주세요"
          onBlur={() => { trigger("email"); setIsVisibleEmail(true); }}
        />
        {isVisibleEmail && <ErrorMsg>{errors.email?.message}</ErrorMsg>}

        <Input
          type={"password"}
          {...register("password")}
          placeholder="비밀번호를 입력해주세요"
          onBlur={() => { trigger("password"); setIsVisiblePwd(true); }}
        />
        {isVisiblePwd && <ErrorMsg>{errors.password?.message}</ErrorMsg>}

        <SubmitBtn type={"submit"} disabled={!isValid}>로그인</SubmitBtn>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;