import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styled from 'styled-components';

const LoginPage = () => {
    const schema = yup.object().shape({
    email: yup.string().email('올바른 형식이 아닙니다.').required('이메일을 반드시 입력해주세요.'),
    password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required(),
    
})

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return (
        <MainWrapp>
        <h1 style={{marginTop:'257px'}}>로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder='이메일을 입력해주세요!' type={'email'} {...register("email")}/>     
            <p style={{color: 'red', marginTop:0}}>{errors.email?.message}</p>
            <Input placeholder='비밀번호를 입력해주세요!' type={'password'} {...register("password")}/>
            <p style={{color: 'red', marginTop:0}}>{errors.password?.message}</p>
            <Submit value='로그인' type='submit' disabled={!isValid} isValid={isValid}/>
        </form>
        </MainWrapp>
        
    );
};

const MainWrapp = styled.main`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

const Input = styled.input`
width: 450px;
height: 50px;

background: #FFFFFF;
border-radius: 10px;

`

const Submit = styled.input `
/* 로그인 버튼 배경 */

width: 458px;
height: 50px;


background: ${(props) => (props.isValid ? '#FF073D' : 'gray')};

border-radius: 10px;
font-size:20px;
color:white;

cursor: ${(props) => (props.isValid ? 'pointer' : 'not-allowed')};
    transition: background-color 0.3s;

    &:disabled {
        background: gray;
    }
`

export default LoginPage;
