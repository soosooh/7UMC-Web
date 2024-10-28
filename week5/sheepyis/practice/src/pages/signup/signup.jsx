import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import colors from '../../styles/colors';

const InputContainer = styled.div`
    position: relative;
`;

const InputBox = styled.input`
    width: 22.5vw;
    height: 2.5vw;
    padding: 0 1vw;
    box-sizing: border-box;
    border: none;
    border-radius: 0.5vw;
    background-color: ${props => props.type === 'submit' ? colors.main : colors.white};
    color: ${props => props.type === 'submit' ? colors.white : colors.navBackground};
    cursor: pointer;
    font-size: 0.7vw;
    font-weight: bold;

    &:disabled {
        background-color: ${colors.navBackground};
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

const ErrorP = styled.p`
    position: absolute;
    font-weight: 400;
    font-size: 0.5vw;
    color: ${colors.error};
    margin-top: 0.5vw;
`;

const SignUpPage = () => {
    const schema = yup.object().shape({
        email: yup.string().email('유효하지 않은 이메일 형식입니다.').required('이메일은 필수 입력 요소입니다.'),
        password: yup.string().min(8, '비밀번호는 8자 이상 16자 이하여야 합니다.').max(16, '비밀번호는 8자 이상 16자 이하여야 합니다.').required('비밀번호는 필수 입력 요소입니다.'),
        passwordCheck: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 검증은 필수 요소입니다.')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
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
