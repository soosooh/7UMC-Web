import { z } from 'zod';
import useForm from '../../hooks/useForm';
import { InputContainer, InputBox, ErrorP } from "../../styles/auth";

const LoginPage = () => {
    const schema = z.object({
        email: z.string('문자열이어야 합니다.').email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!').nonempty('이메일은 필수 입력 요소입니다.'),
        password: z.string('문자열이어야 합니다.').min(8, '비밀번호는 8~16자 사이로 입력해주세요!').max(16, '비밀번호는 8~16자 사이로 입력해주세요!').nonempty('비밀번호는 필수 입력 요소입니다.')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm(schema);

    const onSubmit = (data) => {
        console.log('로그인 제출: ', data);
    };

    return (
        <div className="outletContainer2">
            <p id="pageTitle">로그인</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <InputBox type={'email'} {...register("email")} placeholder="이메일을 입력해주세요!" />
                    <ErrorP>{errors.email?.message}</ErrorP>
                </InputContainer>

                <InputContainer>
                    <InputBox type={'password'} {...register("password")} placeholder="비밀번호를 입력해주세요!" />
                    <ErrorP>{errors.password?.message}</ErrorP>
                </InputContainer>

                <InputBox type={'submit'} value="로그인" disabled={!isValid}/>
            </form>
        </div>
    );
};

export default LoginPage;
