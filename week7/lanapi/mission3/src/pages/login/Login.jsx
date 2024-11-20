//피드백 수정 완료

//피드백 내용
//pages>login.jsx를 보면 idInput, passwordInput이 같은 스타일링이 적용되는데 따로 컴포넌트를 만드셨던데 굳이 싶어요. 
//다른 비슷한 디자인들도 재사용하는 방식으로 수정해주세요!

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import LoginList from '../../components/login/LoginList';

// const loginschema = yup.object({
//     email: yup.string().email('이메일이 올바르지 않습니다.').required('이메일은 필수 입력 항목입니다.'),
//     password: yup.string().min(8, '비밀번호는 8자리 이상이어야 합니다.').max(16, '비밀번호는 16자리 이하로 입력해주세요.').required('비밀번호를 입력해주세요.')
// });

// const Login = () => {
//     const { register, handleSubmit, formState: { errors, touchedFields, isValid } } = useForm({
//         resolver: yupResolver(loginschema),
//         mode: 'all',
//     });

//     const navigate = useNavigate();
//     const { mutate, isLoading } = useAuth();

//     const handleLogin = (data) => {
//         mutate(data, {
//             onSuccess: () => navigate('/'),
//             onError: () => alert("로그인에 실패했습니다. 다시 시도해주세요.")
//         });
//     };

//     return (
//         <Wrapper>
//             <LoginContainer>
//                 <LoginText>로그인</LoginText>
//                 <LoginList
//                     register={register}
//                     touchedFields={touchedFields}
//                     errors={errors}
//                 />
//                 <LoginButton type="button" onClick={handleSubmit(handleLogin)} disabled={!isValid || isLoading}>
//                     {isLoading ? "로딩 중..." : "로그인"}
//                 </LoginButton>
//             </LoginContainer>
//         </Wrapper>
//     );
// };

// export default Login;


import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from '../../api/apiClient';  // signIn 함수 불러오기
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginList from '../../components/login/LoginList'; // 컴포넌트 불러오기

// 로그인 검증 스키마
const loginSchema = z.object({
  email: z.string().email('유효하지 않은 이메일 형식입니다.').nonempty('이메일은 필수 입력 사항입니다.'),
  password: z.string().min(8, '비밀번호는 8자리 이상이어야 합니다.'),
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'all'
  });
  const navigate = useNavigate();

  const loginBox = async (userData) => {
    console.log('로그인 요청 데이터:', userData);

    try {
      const response = await signIn({  // 'signIn' 사용
        email: userData.email,
        password: userData.password,
      });

      console.log("서버 응답:", response);

      if (response) {
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
        <Title>로그인</Title> {/* Title 추가 */}
        <Form onSubmit={handleSubmit(loginBox)}>
          <LoginList register={register} errors={errors} isValid={isValid} />
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default LoginPage;

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
