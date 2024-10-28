import * as yup from 'yup';
import useForm from "../../hooks/useForm";
import { InputContainer, InputBox, ErrorP } from "../../styles/auth";

const SignUpPage = () => {
    const schema = yup.object().shape({
        email: yup.string().email('유효하지 않은 이메일 형식입니다.').required('이메일은 필수 입력 요소입니다.'),
        password: yup.string().min(8, '비밀번호는 8자 이상 16자 이하여야 합니다.').max(16, '비밀번호는 8자 이상 16자 이하여야 합니다.').required('비밀번호는 필수 입력 요소입니다.'),
        passwordCheck: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 검증은 필수 요소입니다.')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm(schema);

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
