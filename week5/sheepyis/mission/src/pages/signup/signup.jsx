import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputContainer, InputBox, ErrorP } from "../../styles/auth";

const SignUpPage = () => {
    const schema = yup.object().shape({
        email: yup.string('문자열이어야 합니다.').email('유효한 이메일 형식이어야 합니다.').required('이메일은 필수 입력 요소입니다.'),
        password: yup.string('문자열이어야 합니다.').min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호는 필수 입력 요소입니다.'),
        passwordCheck: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 검증은 필수 요소입니다.')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('회원가입 제출: ', data);
    };

    return (
        <div className="outletContainer2">
            <p id="pageTitle">회원가입</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <InputBox type={'email'} {...register("email")} placeholder="이메일을 입력해주세요!" />
                    <ErrorP>{errors.email?.message}</ErrorP>
                </InputContainer>

                <InputContainer>
                    <InputBox type={'password'} {...register("password")} placeholder="비밀번호를 입력해주세요!" />
                    <ErrorP>{errors.password?.message}</ErrorP>
                </InputContainer>

                <InputContainer>
                    <InputBox type={'password'} {...register("passwordCheck")} placeholder="비밀번호를 다시 입력해주세요!" />
                    <ErrorP>{errors.passwordCheck?.message}</ErrorP>
                </InputContainer>

                <InputBox type={'submit'} value="회원가입" disabled={!isValid}/>
            </form>
        </div>
    );
};

export default SignUpPage;
