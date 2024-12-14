
import * as yup from 'yup'
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup'
import useFormCo from '../../utils/use-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";

const SignUpPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, errors, isValid} = useFormCo();
    //const { register, handleSubmit, formState: {errors, isValid}} = useFormCo();


    // useMutation 설정
    const mutaion = useMutation({
        mutationFn: async (data) => {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "회원가입 실패");
            }

            return response.json();
        },
            onSuccess: () => {
                alert("회원가입이 완료되었습니다!");
                navigate("/login");
            },
            onError: (error) => {
                alert(`회원가입 실패: ${error.message}`);
            },
        
    })

    const onSubmit = (data) => {
        mutaion.mutate(data);
    }

    return (
        <MainWrapp>
            <h1>회원가입</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
            </Form>
        </MainWrapp>

    );
};

const Form = styled.form`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
width:80%;
`

const MainWrapp = styled.main`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;

`


const Input = styled.input`
max-width:450px;
width: 100%;
height: 3em;

background: #FFFFFF;
border-radius: 10px;

`


const Submit = styled.input `
/* 로그인 버튼 배경 */
max-width: 458px;
width: 100%;
height: 3em;


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
