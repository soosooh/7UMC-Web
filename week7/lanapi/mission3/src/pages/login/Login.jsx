import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query'; // useMutation 임포트
import { signIn } from '../../api/apiClient'; // 로그인 API 함수
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginList from '../../components/login/LoginList'; // LoginList 컴포넌트
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

  // useMutation으로 비동기 요청 처리
  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: (response) => {
      console.log('서버 응답:', response);
      login({ email: response.email }); // 사용자 데이터 설정
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      alert('로그인에 성공했습니다!');
      navigate('/');
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
      console.error('로그인 오류:', errorMessage);
      alert(`로그인 실패: ${errorMessage}`);
    },
  });

  const onSubmit = (userData) => {
    console.log('로그인 요청 데이터:', userData);
    mutation.mutate(userData); 
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
