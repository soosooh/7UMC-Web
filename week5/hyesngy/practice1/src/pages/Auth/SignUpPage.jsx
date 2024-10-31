import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
const IdInput = styled.input`
  width: 25rem;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`
const PwInpunt = styled(IdInput)``

const SignUpBtn = styled.button`
  width: 25rem;
  padding: 1rem;
  border-radius: 8px;
  background: #F82F62;
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
`
const ErrorMsg = styled.p`
  color: red;
  align-self: flex-start;
`

const SignUpPage = () => {

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('유효한 이메일 주소를 입력해주세요.')
            .required('이메일을 반드시 입력해주세요.'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다.')
            .max(16, '비밀번호는 16자 이하여야 합니다.')
            .required('비밀번호를 반드시 입력해주세요.'),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
    };

    return (
        <PageContainer>
            <h1>회원가입</h1>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit(onSubmit)}>
                <IdInput
                    type={"email"}
                    {...register("email")}
                    placeholder="이메일을 입력해주세요!"
                />
                <ErrorMsg>{errors.email?.message}</ErrorMsg>

                <PwInpunt
                    type={"password"}
                    {...register("password")}
                    placeholder="비밀번호를 입력해주세요!"
                />
                <ErrorMsg>{errors.password?.message}</ErrorMsg>

                <SignUpBtn type="submit" disabled={!isValid}>회원가입</SignUpBtn>
            </form>
        </PageContainer>
    );
};

export default SignUpPage;
