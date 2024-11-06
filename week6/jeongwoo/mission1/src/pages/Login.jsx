// src/pages/Login.jsx
import { useForm } from '../hooks/useForm';
import { validateLogin } from '../utils/validate';
import Input from '../components/input';
import {
  AuthContainer,
  AuthWrapper,
  AuthTitle,
  AuthForm,
  SubmitButton
} from '../styles/auth';

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const { values, errors, touched, getTextInputProps } = useForm(
        initialValues,
        validateLogin
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('로그인 데이터:', values);
    };

    const isValid = Object.keys(errors).length === 0 
                   && values.email !== '' 
                   && values.password !== '';
                   
    // Input 컴포넌트의 형식에 맞게 register 함수 생성
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
                    <SubmitButton type="submit" isValid={isValid} disabled={!isValid}>
                        로그인
                    </SubmitButton>
                </AuthForm>
            </AuthWrapper>
        </AuthContainer>
    );
};

export default Login;