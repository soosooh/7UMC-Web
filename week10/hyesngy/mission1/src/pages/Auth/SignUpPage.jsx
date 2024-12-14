import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SubmitBtn, ErrorMsg, FormContainer, InputWrapper } from '../../styles/auth/authStyles';
import { useAuthForm } from '../../hooks/use-Form';
import { useNavigate } from 'react-router-dom';
import authApi from '../../api/auth/authApi';
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

const SignUpPage = () => {
    const [isVisibleEmail, setIsVisibleEmail] = useState(false);
    const [isVisiblePwd, setIsVisiblePwd] = useState(false);
    const [isIsVisiblePwdCheck, setIsVisiblePwdCheck] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid }, trigger } = useAuthForm('signup');
    const navigate = useNavigate();

    const { mutate: signupMutation } = useMutation({
        mutationFn: (data) => authApi(data, 'register'),
        onSuccess: () => {
            navigate("/login");
        },
        onError: (error) => {
            console.error(error.message);
        },
    });

    const onSubmit = (data) => {
        signupMutation(data);
    };

    return (
        <PageContainer>
            <h1>회원가입</h1>
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
                <InputWrapper>
                    <Input
                        type={"password"}
                        {...register("passwordCheck")}
                        placeholder="비밀번호를 다시 입력해주세요"
                        onBlur={() => { trigger("passwordCheck"); setIsVisiblePwdCheck(true); }}
                    />
                    {isIsVisiblePwdCheck && <ErrorMsg>{errors.passwordCheck?.message}</ErrorMsg>}
                </InputWrapper>
                <SubmitBtn type="submit" disabled={!isValid}>회원가입</SubmitBtn>
            </FormContainer>
        </PageContainer>
    );
};

export default SignUpPage;