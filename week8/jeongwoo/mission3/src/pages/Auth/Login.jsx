import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '../../hooks/useForm';
import { validateLogin } from '../../utils/validate';
import authApi from '../../api/authApi';
import tokenStorage from '../../contexts/tokenStorage';
import Input from '../../components/input';
import {
 AuthContainer,
 AuthWrapper,
 AuthTitle,
 AuthForm,
 SubmitButton
} from '../../styles/auth';

const Login = () => {
   const navigate = useNavigate();
   const initialValues = {
       email: '',
       password: ''
   };

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
           alert('로그인에 실패했습니다.');
           console.error('Login Error:', error);
       }
   });

   const handleSubmit = async (e) => {
       e.preventDefault();
       loginMutation.mutate(values);
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
               </AuthForm>
           </AuthWrapper>
       </AuthContainer>
   );
};

export default Login;
