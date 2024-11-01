import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SubmitBtn, ErrorMsg } from '../../styles/auth/authStyles';
import { useAuthForm } from '../../hooks/use-Form';

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
    const [isVisibleName, setIsVisibleName] = useState(false);
    const [isVisibleAge, setIsVisibleAge] = useState(false);
    const [isVisibleEmail, setIsVisibleEmail] = useState(false);
    const [isVisiblePwd, setIsVisiblePwd] = useState(false);
    const [isIsVisibleConfirmedPwd, setIsVisibleConfirmedPwd] = useState(false);

    const { register, handleSubmit, formState: { errors, isValid }, trigger } = useAuthForm('signup');

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
    };

    return (
        <PageContainer>
            <h1>회원가입</h1>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type={"name"}
                    {...register("name")}
                    placeholder="이름을 입력해주세요"
                    onBlur={() => { trigger("name"); setIsVisibleName(true); }}
                />
                {isVisibleName && <ErrorMsg>{errors.name?.message}</ErrorMsg>}

                <Input
                    type="number"
                    {...register("age", { valueAsNumber: true })}
                    placeholder="나이를 입력해주세요"
                    onBlur={() => { trigger("age"); setIsVisibleAge(true); }}
                />
                {isVisibleAge && <ErrorMsg>{errors.age?.message}</ErrorMsg>}

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
                    {...register("confirmPassword")}
                    placeholder="비밀번호를 다시 입력해주세요"
                    onBlur={() => { trigger("confirmPassword"); setIsVisibleConfirmedPwd(true); }}
                />
                {isIsVisibleConfirmedPwd && <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>}

                <SubmitBtn type="submit" disabled={!isValid}>회원가입</SubmitBtn>
            </form>
        </PageContainer>
    );
};

export default SignUpPage;