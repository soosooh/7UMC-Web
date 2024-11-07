
import styled from 'styled-components';
import useLogin from '../../hooks/use-login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/LoginContext';

const Loginuseform = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, errors, isValid} = useLogin();
    const { login } = useAuth();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            if (response.ok) {
                const responseData = await response.json(); 

                localStorage.setItem('accessToken', responseData.accessToken);
                localStorage.setItem('refreshToken', responseData.refreshToken);
                login();
                alert("로그인이 완료되었습니다!");
                navigate('/');
            } else {
                const errorData = await response.json();
                alert(`로그인 실패: ${errorData.message}`);
            }
        } catch (error) {
            console.error("로그인 중 오류 발생:", error);
            alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
        }
    };

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

export default Loginuseform;
