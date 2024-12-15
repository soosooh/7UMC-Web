import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '../../hooks/useForm';
import { validateLogin } from '../../utils/validate';
import authApi from '../../api/authApi';
import tokenStorage from '../../contexts/tokenStorage';
import Input from '../../components/input';
import KakaoButton from '../../components/button/KakaoButton';
import { getRedirectURI } from '../../api/redirectURI';
import {
  AuthContainer,
  AuthWrapper,
  AuthTitle,
  AuthForm,
  SubmitButton
} from '../../styles/auth';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const initialValues = {
    email: '',
    password: ''
  };

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      const getToken = async () => {
        try {
          const tokenResponse = await authApi.kakaoLogin(code);
          localStorage.setItem('kakaoToken', tokenResponse.access_token);
          localStorage.setItem('isKakaoLogin', 'true');
          
          const userInfo = await authApi.getKakaoUserInfo(tokenResponse.access_token);
          localStorage.setItem('userNickname', userInfo.properties.nickname);
          
          navigate('/');
        } catch (error) {
          console.error('Kakao login error:', error);
          localStorage.removeItem('kakaoToken');
          localStorage.removeItem('isKakaoLogin');
          localStorage.removeItem('userNickname');
        }
      };
      getToken();
    }
  }, [searchParams, navigate]);

  const { values, errors, touched, getTextInputProps } = useForm(
    initialValues,
    validateLogin
  );

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      tokenStorage.setTokens(accessToken, refreshToken);
      alert('로그인에 성공하셨습니다.');
      navigate('/');
      window.location.reload();
    },
    onError: (error) => {
      alert('일반 로그인에 실패했습니다.');
      console.error('Login Error:', error);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginMutation.mutate(values);
  };

  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_TOKEN}&redirect_uri=${getRedirectURI()}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };

  const isValid = Object.keys(errors).length === 0 
               && values.email !== '' 
               && values.password !== '';
               
  const register = (id) => ({
    value: values[id],
    onChange: (e) => getTextInputProps(id).onChange(e),
    onBlur: getTextInputProps(id).onBlur,
    name: id
  });

  return (
    <AuthContainer>
      <AuthWrapper>
        <AuthTitle>로그인</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요!"
            register={register}
            id="email"
            error={touched.email && errors.email && {message: errors.email}}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요!"
            register={register}
            id="password"
            error={touched.password && errors.password && {message: errors.password}}
          />
          <SubmitButton 
            type="submit" 
            isValid={isValid} 
            disabled={!isValid || loginMutation.isPending}
          >
            {loginMutation.isPending ? '로그인 중...' : '로그인'}
          </SubmitButton>
          <KakaoButton onClick={handleKakaoLogin} />
        </AuthForm>
      </AuthWrapper>
    </AuthContainer>
  );
};

export default Login;