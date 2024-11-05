import { z } from 'zod';
import useForm from "../../hooks/useForm";
import { InputContainer, InputBox, ErrorP } from "../../styles/auth";
import { API } from '../../api/authAxios';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();

    const schema = z.object({
        email: z.string('문자열이어야 합니다.').email('유효한 이메일 형식이어야 합니다.').nonempty('이메일은 필수 입력 요소입니다.'),
        password: z.string('문자열이어야 합니다.').min(8, '비밀번호는 8자 이상 16자 이하여야 합니다.').max(16, '비밀번호는 8자 이상 16자 이하여야 합니다.').nonempty('비밀번호는 필수 입력 요소입니다.'),
        passwordCheck: z.string('문자열이어야 합니다.')
        .nonempty('비밀번호 검증은 필수 요소입니다.')
    }).refine(data => data.password === data.passwordCheck, {
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordCheck'],
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm(schema);

    const onSubmit = async (data) => {
        try {
            const response = await API.post("/auth/register", {
                email: data.email,
                password: data.password,
                passwordCheck: data.passwordCheck
            });
            alert("회원가입이 완료되었습니다.");
            console.log('회원가입 성공: ', response.data);
            navigate('/login');
        } catch (error) {
            console.error('회원가입 오류: ', error.response?.data || error.message);
        }
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
