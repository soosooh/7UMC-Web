//피드백 수정 완료

//피드백 내용
//pages>login.jsx를 보면 idInput, passwordInput이 같은 스타일링이 적용되는데 따로 컴포넌트를 만드셨던데 굳이 싶어요. 
//다른 비슷한 디자인들도 재사용하는 방식으로 수정해주세요!

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginList from '../../components/login/LoginList';

const loginschema = yup.object({
    email: yup.string().email('이메일이 올바르지 않습니다.').required('이메일은 필수 입력 항목입니다.'),
    password: yup.string().min(8, '비밀번호는 8자리 이상이어야 합니다.').max(16, '비밀번호는 16자리 이하로 입력해주세요.').required('비밀번호를 입력해주세요.')
});

const Login = () => {
    const { register, handleSubmit, formState: { errors, touchedFields, isValid } } = useForm({
        resolver: yupResolver(loginschema),
        mode: 'all',
    });

    const navigate = useNavigate();
    const credentials = { email: '', password: '' };
    const { refetch, isLoading } = useAuth(credentials);

    const handleLogin = async (data) => {
        credentials.email = data.email;
        credentials.password = data.password;
        await refetch();
        navigate('/');
    };

    return (
        <Wrapper>
            <LoginContainer>
                <LoginText>로그인</LoginText>
                <LoginList
                    register={register}
                    touchedFields={touchedFields}
                    errors={errors}
                />
                <LoginButton type="button" onClick={handleSubmit(handleLogin)} disabled={!isValid || isLoading}>
                    {isLoading ? "로딩 중..." : "로그인"}
                </LoginButton>
            </LoginContainer>
        </Wrapper>
    );
};

export default Login;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent; 
    z-index: 10;
    pointer-events: none;
`;

const LoginContainer = styled.div`
    width: 450px;
    height: 313px;
    border-radius: 10px 0px 0px 0px;
    padding: 20px;
    pointer-events: auto; 
`;

const LoginText = styled.h1`
    font-size: 1.8rem;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 1.5rem;
`;

const LoginButton = styled.button`
    width: 95%;
    padding: 12px;
    background-color: ${(props) => (props.disabled ? '#6A6A6A' : '#FF073D')};
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 1rem;

    &:hover {
        background-color: ${(props) => (props.disabled ? '#6A6A6A' : '#CC0631')};
        transform: ${(props) => (props.disabled ? 'none' : 'scale(1.02)')};
    }
`;
