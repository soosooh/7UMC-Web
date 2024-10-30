import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

// import {useForm} from 'react-hook-form'
// import * as yup from 'yup'
// import {yupResolver} from '@hookform/resolvers/yup'

// const SignUpPage = () => {
//     const schema = yup.object().shape({
//         email: yup.string().email().required(),
//         password: yup.string().min(8).max(16).required(),
//     })

//     const {register, handleSubmit, formState: {errors}} = useForm({
//         resolver: yupResolver(schema)
//     });

//     const onSubmit = (data) => {
//         console.log('폼 데이터 제출')
//         console.log(data);
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type={'email'} {...register("email")}/>
//             // register 한 이름에 맞게 연결해주세요!
//             <p style={{color: 'red'}}>{errors.email?.message}</p>
//             <input type={'password'} {...register("password")}/>
//             <p style={{color: 'red'}}>{errors.password?.message}</p>
//             <input type={'submit'}/>
//         </form>
//     );
// };

// export default SignUpPage;

const Login = () => {
    const loginschema = yup.object({
        email: yup.string().email('이메일이 올바르지 않습니다. 확인해주세요').required('이메일은 필수 입력 항목입니다.'),
        password: yup.string().min(8, '비밀번호는 8자리 이상이어야 합니다.').max(16, '비밀번호는 16자리 이하로 입력해주세요.').required('비밀번호를 입력해주세요.')
    });

    const { register, handleSubmit, formState: { errors, touchedFields, isValid } } = useForm({
        resolver: yupResolver(loginschema),
        mode: 'all' 
    });

    // const {register, handleSubmit, formState: {errors}} = useForm({
    //     resolver: yupResolver(schema)
    // });

    const LoginBox = (data) => {
        console.log('로그인 시도:', data);
    };

    return (
        <Wrapper>
            <LoginText>로그인</LoginText>

            <Form onSubmit={handleSubmit(LoginBox)}>
                <Field>
                    <EmailInput
                        type="email"
                        placeholder="이메일 주소를 입력하세요."
                        {...register("email")}
                        isTouched={touchedFields.email}
                    />
                    <EmailErrorText>{touchedFields.email && errors.email?.message}</EmailErrorText>
                </Field>

                <Field>
                    <PasswordInput
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        {...register("password")}
                        isTouched={touchedFields.password}
                    />
                    <PasswordErrorText>{touchedFields.password && errors.password?.message}</PasswordErrorText>
                </Field>

                <LoginButton type="submit" disabled={!isValid}>로그인</LoginButton>
            </Form>
        </Wrapper>
    );
};

export default Login;

const LoginText = styled.h1`
    width: 150%; /* 화면 전체 너비를 차지하도록 수정 */
    height: 24px;
    position: absolute;
    top: 200px;
    left: 1020px;
    font-size: 40px;
    color: #FFFFFF;


`;

const Form = styled.form`
    position: absolute;
    top: 0;
    left: 0;
`;

const Field = styled.div`
    margin-bottom: 50px;
`;

const EmailInput = styled.input`
    padding: 10px;
    width: 450px;
    height: 50px;
    position: absolute;
    top: 336px;
    left: 824px;
    border: 1px solid ${(props) => (props.isTouched ? '#FF073D' : '#000000')};
    border-radius: 10px;
    font-size: 16px;
    background-color: #FFFFFF;
    color: #000000;
    opacity: 1;

    &:focus {
        outline: none;
        border-color: #FF073D;
    }
`;

const PasswordInput = styled.input`
    padding: 10px;
    width: 450px;
    height: 50px;
    position: absolute;
    top: 428px;
    left: 824px;
    border: 1px solid ${(props) => (props.isTouched ? '#FF073D' : '#000000')};
    border-radius: 10px;
    font-size: 16px;
    background-color: #FFFFFF;
    color: #000000;
    opacity: 1;

    &:focus {
        outline: none;
        border-color: #FF073D;
    }
`;

/* 이메일 경고창 스타일 */
const EmailErrorText = styled.p`
    color: #FF073D;
    font-size: 13 px;
    width: 450px;
    height: 14px;
    position: absolute;
    top: 396px; /* 첫 번째 경고창의 위치 */
    left: 824px;
    opacity: 1;
`;

/* 비밀번호 경고창 스타일 */
const PasswordErrorText = styled.p`
    color: #FF073D;
    font-size: 12px;
    width: 450px;
    height: 14px;
    position: absolute;
    top: 488px; /* 두 번째 경고창의 위치 */
    left: 824px;
    opacity: 1;
`;

const LoginButton = styled.button`
    padding: 10px;
    width: 474px;
    height: 50px;
    position: absolute;
    top: 520px;
    left: 824px;
    background-color: ${(props) => (props.disabled ? '#413F3F' : '#FF073D')}; /* 기본은 빨강, 잘못된 입력 시 회색 */
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-size: 16px;
    opacity: 1;

    &:hover {
        background-color: ${(props) => (props.disabled ? '#413F3F' : '#0000FF')}; /* 기본 빨강일 때는 파란색으로 변경 */
    }
`;
