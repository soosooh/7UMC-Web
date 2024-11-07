import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SubmitBtn, ErrorMsg, FormContainer } from '../../styles/auth/authStyles';
import { useAuthForm } from '../../hooks/use-Form';
import { useNavigate } from 'react-router-dom';
import signup from '../../api/auth/signup';

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

const SignUpPage = () => {
    const [isVisibleEmail, setIsVisibleEmail] = useState(false);
    const [isVisiblePwd, setIsVisiblePwd] = useState(false);
    const [isIsVisiblePwdCheck, setIsVisiblePwdCheck] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid }, trigger } = useAuthForm('signup');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await signup(data);
            if (response) {
                console.log('회원가입 성공');
                navigate('/login');
            }
        } catch (error) {
            console.log('회원가입 실패', error.message);
        }
    };

    return (
        <PageContainer>
            <h1>회원가입</h1>
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

                <Input
                    type={"password"}
                    {...register("passwordCheck")}
                    placeholder="비밀번호를 다시 입력해주세요"
                    onBlur={() => { trigger("passwordCheck"); setIsVisiblePwdCheck(true); }}
                />
                {isIsVisiblePwdCheck && <ErrorMsg>{errors.passwordCheck?.message}</ErrorMsg>}

                <SubmitBtn type="submit" disabled={!isValid}>회원가입</SubmitBtn>
            </FormContainer>
        </PageContainer>
    );
};

export default SignUpPage;