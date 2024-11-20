import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from '../../api/apiClient'; // 로그인 API 함수
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginList from '../../components/login/LoginList'; // LoginList 컴포넌트
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // AuthContext 가져오기

// 로그인 검증 스키마
const loginSchema = z.object({
    email: z.string().email('유효하지 않은 이메일 형식입니다.').nonempty('이메일은 필수 입력 사항입니다.'),
    password: z.string().min(8, '비밀번호는 8자리 이상이어야 합니다.'),
});

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: zodResolver(loginSchema),
        mode: 'all',
    });

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (userData) => {
        console.log('로그인 요청 데이터:', userData);

        try {
            const response = await signIn({
                email: userData.email,
                password: userData.password,
            });

            console.log('서버 응답:', response);

            if (response) {
                login({ email: userData.email }); // 닉네임 설정
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);
                alert('로그인에 성공했습니다!');
                navigate('/');
            }
        } catch (error) {
            console.error('로그인 오류:', error);
            alert('로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.');
        }
    };

    return (
        <Wrapper>
            <FormContainer>
                <Title>로그인</Title>
                <Form onSubmit={handleSubmit(handleLogin)}>
                    <LoginList register={register} errors={errors} isValid={isValid} />
                </Form>
            </FormContainer>
        </Wrapper>
    );
};

export default LoginPage;

// 스타일링
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: #202832;
    padding: 0 20px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 450px;
    padding: 20px;
    background-color: #202832;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        max-width: 400px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 15px;
    }
`;

const Title = styled.h1`
    color: white;
    font-size: 24px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
