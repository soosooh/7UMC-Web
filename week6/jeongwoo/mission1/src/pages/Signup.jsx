import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/input';
import {
  AuthContainer,
  AuthWrapper,
  AuthTitle,
  AuthForm,
  SubmitButton
} from '../styles/auth';

const Signup = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다')
            .required('이메일을 반드시 입력해주세요'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다')
            .max(16, '비밀번호는 16자 이하여야 합니다')
            .required('비밀번호를 반드시 입력해주세요'),
        passwordCheck: yup
            .string()
            .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
            .required('비밀번호를 다시 입력해주세요')
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('회원가입 데이터:', data);
    };

    return (
        <AuthContainer>
            <AuthWrapper>
                <AuthTitle>회원가입</AuthTitle>
                <AuthForm onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="email"
                        placeholder="이메일을 입력해주세요!"
                        register={register}
                        id="email"
                        error={errors.email}
                    />
                    <Input
                        type="password"
                        placeholder="비밀번호를 입력해주세요!"
                        register={register}
                        id="password"
                        error={errors.password}
                    />
                    <Input
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요!"
                        register={register}
                        id="passwordCheck"
                        error={errors.passwordCheck}
                    />
                    <SubmitButton type="submit" isValid={isValid} disabled={!isValid}>
                        회원가입
                    </SubmitButton>
                </AuthForm>
            </AuthWrapper>
        </AuthContainer>
    );
};

export default Signup;