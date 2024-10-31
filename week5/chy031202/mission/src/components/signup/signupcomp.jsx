
import * as yup from 'yup'
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup'
import useFormCo from '../../hooks/use-form';

const SignUpPage = () => {
    const { register, handleSubmit, errors, isValid, onSubmit } = useFormCo();

    return (
        <MainWrapp>
            <h1 style={{marginTop:'257px'}}>회원가입</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder='이메일을 입력해주세요!' type={'email'} {...register("email")}/>     
            <p style={{color: 'red', marginTop:0}}>{errors.email?.message}</p>

            <Input placeholder='닉네임을 입력해주세요!' type={'text'} {...register("nickname")}/>     
            <p style={{color: 'red', marginTop:0}}>{errors.nickname?.message}</p>
            <Input placeholder='성별을 입력해주세요!' type={'text'} {...register("gender")}/>     
            <p style={{color: 'red', marginTop:0}}>{errors.gender?.message}</p>


            <Input placeholder='비밀번호를 입력해주세요!' type={'password'} {...register("password")}/>
            <p style={{color: 'red', marginTop:0}}>{errors.password?.message}</p>
            <Input placeholder='비밀번호를 다시입력해주세요!' type={'password'} {...register("passwordCheck")}/>
            <p style={{color: 'red', marginTop:0}}>{errors.passwordCheck?.message}</p>
            <Submit value='제출' type='submit' disabled={!isValid} isValid={isValid}/>
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


export default SignUpPage;
