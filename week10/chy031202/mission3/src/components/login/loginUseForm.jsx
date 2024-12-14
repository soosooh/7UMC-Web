
import styled from 'styled-components';
import useLogin from '../../utils/use-login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/LoginContext';
import { useMutation } from '@tanstack/react-query';

const Loginuseform = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, errors, isValid} = useLogin();
    const { login } = useAuth();

    const mutaion = useMutation({
        mutationFn: async(data) =>{
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
        });
        if(!response.ok) {
            const errorData = await response.json();
            alert(`로그인 실패: ${errorData.message}`);
        }
        return response.json();
    },
    onSuccess: (responseData) => {
        // 서버에서 받은 데이터를 로컬 스토리지에 저장
        localStorage.setItem('accessToken', responseData.accessToken);
        localStorage.setItem('refreshToken', responseData.refreshToken);

        // 로그인 상태를 업데이트
        login();
        alert('로그인이 완료되었습니다!');
        navigate('/');
    },
    onError:(error) =>{
        console.error("로그인 중 오류 발생:", error);
            alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
    },
})

    const onSubmit = (data) => {
        mutaion.mutate(data);
    };

    return (
        <MainWrapp>
        <h1 style={{marginTop:'257px'}}>로그인</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder='이메일을 입력해주세요!' type={'email'} {...register("email")}/>     
            <p style={{color: 'red', marginTop:0}}>{errors.email?.message}</p>
            <Input placeholder='비밀번호를 입력해주세요!' type={'password'} {...register("password")}/>
            <p style={{color: 'red', marginTop:0}}>{errors.password?.message}</p>
            <Submit value='로그인' type='submit' disabled={!isValid} isValid={isValid}/>
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

export default Loginuseform;
