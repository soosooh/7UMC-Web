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

const SignUp = () => {
  const signupSchema = yup.object({
    email: yup.string().email('이메일 형식이 올바르지 않습니다. 이메일 주소를 확인해주세요.').required('이메일은 필수 입력 사항입니다.'),
    password: yup.string().min(8, '비밀번호는 8자리 이상, 16자리 이하로 입력해주세요').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호는 필수 입력 사항입니다.'),
    passwordCheck: yup.string()
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호 확인은 필수 입력 요소입니다.')
 });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(signupSchema),
        mode: 'all'
    });

    const SignupBox = (userData) => {
        console.log('회원 데이터:', userData);
    };

    return (
        <Wrapper>
            <FormContainer>
                <Title>회원가입</Title>
                <Form onSubmit={handleSubmit(SignupBox)}>
                    <FieldContainer>
                        <TextInput 
                            type="email" 
                            placeholder="이메일을 입력해주세요" 
                            {...register("email")} 
                        />
                        <ErrorText>{errors.email?.message}</ErrorText>
                    </FieldContainer>

                    <FieldContainer>
                        <TextInput 
                            type="password" 
                            placeholder="비밀번호를 입력해주세요" 
                            {...register("password")} 
                        />
                        <ErrorText>{errors.password?.message}</ErrorText>
                    </FieldContainer>

                    <FieldContainer>
                        <TextInput 
                            type="password" 
                            placeholder="비밀번호를 한번 더 입력해주세요" 
                            {...register("passwordCheck")} 
                        />
                        <ErrorText>{errors.passwordCheck?.message}</ErrorText>
                    </FieldContainer>

                    <SignupButton type="submit" value="회원가입" disabled={!isValid} />
                </Form>
            </FormContainer>
        </Wrapper>
    );
};

export default SignUp;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: #202832;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    padding: 20px;
    background-color: #202832;
    border-radius: 10px; 
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    left: -160px; 
    top: -100px; 
`;

const Title = styled.h1`
    color: white;
    width: 100%;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FieldContainer = styled.div`
    margin-bottom: 15px;
    width: 100%;
`;

const TextInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #000000;
    border-radius: 5px;
`;

const ErrorText = styled.p`
    color: #FF073D; 
    font-size: 14px;
    margin-top: 5px;
`;

const SignupButton = styled.input`
    width: 474px;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    background-color: ${(props) => (props.disabled ? '#413F3F' : '#FF073D')}; 
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    color: #FFFFFF;

    &:hover {
        background-color: ${(props) => !props.disabled && '#000000'}; 
    }
`;
