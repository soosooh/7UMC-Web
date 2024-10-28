import { z } from 'zod';
import useForm from "../../hooks/useForm";
import { InputContainer, InputBox, ErrorP } from "../../styles/auth";

const SignUpPage = () => {
    const schema = z.object({
        nickname: z.string('문자열이어야 합니다.').max(8, '닉네임은 8자 이내여야 합니다.').nonempty('닉네임은 필수 입력 요소입니다.'),
        birth: z.string('문자열이어야 합니다.').length(8, '생년월일은 YYYYMMDD 형식이어야 합니다.').regex(/^\d{8}$/, '생년월일은 YYYYMMDD 형식이어야 합니다.')
            .refine(value => {
                const year = parseInt(value.substring(0, 4), 10);
                const month = parseInt(value.substring(4, 6), 10);
                const day = parseInt(value.substring(6, 8), 10);
                const date = new Date(year, month - 1, day);
                return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;
            }, { message: '유효하지 않은 날짜입니다.' }),
        email: z.string('문자열이어야 합니다.').email('유효한 이메일 형식이어야 합니다.').nonempty('이메일은 필수 입력 요소입니다.'),
        password: z.string('문자열이어야 합니다.').min(8, '비밀번호는 8자 이상 16자 이하여야 합니다.').max(16, '비밀번호는 8자 이상 16자 이하여야 합니다.').nonempty('비밀번호는 필수 입력 요소입니다.'),
        passwordCheck: z.string('문자열이어야 합니다.')
        .nonempty('비밀번호 검증은 필수 요소입니다.')
    }).refine(data => data.password === data.passwordCheck, {
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordCheck'],
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
                    <InputBox type={'text'} {...register("nickname")} placeholder="닉네임을 입력해주세요!" />
                    <ErrorP>{errors.nickname?.message}</ErrorP>
                </InputContainer>

                <InputContainer>
                    <InputBox type={'text'} {...register("birth")} placeholder="생년월일(YYYYMMDD)을 입력해주세요!" />
                    <ErrorP>{errors.birth?.message}</ErrorP>
                </InputContainer>

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
