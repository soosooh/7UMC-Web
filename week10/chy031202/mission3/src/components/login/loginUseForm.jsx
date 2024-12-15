import React from 'react';
import styled from 'styled-components';
import useLogin from '../../utils/use-login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/LoginContext';
import { useMutation } from '@tanstack/react-query';
import KakaoBtn from '../button/kakaoButton';
import { useEffect } from "react";
import axios from "axios";
import getRedirectURI from '../../apis/redirectURI';

const Loginuseform = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, errors, isValid } = useLogin();
    const { login } = useAuth();
    

    

    // /login/auth인지 확인
    const isAuthPath = location.pathname === "/login/auth";

    // if (isAuthPath) {
    //     // 사용자 정보 요청 함수
    // const getUserData = async (token) => {
    //     const user = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //             },
    //         });
    //         console.log(user);
    //         return user.data;
    //     };
    //     // useEffect(() => {
    //     //     const fetchUserData = async () => {
    //     //         const token = await getToken(); // 액세스 토큰 요청
    //     //         if (!token) return;
    
    //     //         localStorage.setItem("token", token); // 토큰 로컬 스토리지에 저장
    
    //     //         const userData = await getUserData(token); // 사용자 정보 요청
    //     //         if (userData) {
    //     //             const nickname = userData.properties?.nickname || "Guest"; // 닉네임 가져오기
    //     //             localStorage.setItem("nickname", nickname); // 닉네임 로컬 스토리지에 저장
    //     //             alert(`안녕하세요, ${nickname}님!`); // 사용자 환영 메시지
    //     //             navigate("/"); // 홈으로 이동
    //     //         } else {
    //     //             console.error("사용자 정보를 가져올 수 없습니다.");
    //     //         }
    //     //     };
    
    //     //     fetchUserData();
    //     // }, [navigate])

        

    // }


    // useEffect(() => {
    //     getToken()
    //         .then((res) => {
    //             if (res) {
    //             localStorage.setItem("token", JSON.stringify(res.data.access_token));
    //             navigate("/");
    //             }
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    // const mutaion = useMutation({
    //     mutationFn: async (data) => {
    //         const response = await fetch('http://localhost:3000/auth/login', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(data),
    //         });
    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             alert(`로그인 실패: ${errorData.message}`);
    //         }
    //         return response.json();
    //     },
    //     onSuccess: (responseData) => {
    //         // 서버에서 받은 데이터를 로컬 스토리지에 저장
    //         localStorage.setItem('accessToken', responseData.accessToken);
    //         localStorage.setItem('refreshToken', responseData.refreshToken);

    //         // 로그인 상태를 업데이트
    //         login();
    //         alert('로그인이 완료되었습니다!');
    //         navigate('/');
    //     },
    //     onError: (error) => {
    //         console.error("로그인 중 오류 발생:", error);
    //         alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
    //     },
    // })

    // const onSubmit = (data) => {
    //     mutaion.mutate(data);
    // };

    

    return (
        <MainWrapp>
            <h1>로그인</h1>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <Form >
                <Input placeholder='이메일을 입력해주세요!' type={'email'} {...register("email")} />
                <p style={{ color: 'red', marginTop: 0 }}>{errors.email?.message}</p>
                <Input placeholder='비밀번호를 입력해주세요!' type={'password'} {...register("password")} />
                <p style={{ color: 'red', marginTop: 0 }}>{errors.password?.message}</p>
                <Submit value='로그인' type='submit' disabled={!isValid} isValid={isValid} />
                <KakaoBtn/>
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
height:100%;
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

const Submit = styled.input`
/* 로그인 버튼 배경 */

max-width: 458px;
width: 100%;
height: 3em;


background: ${(props) => (props.isValid ? '#FF073D' : 'gray')};

border-radius: 10px;
font-size:20px;
color:white;
margin-bottom:20px;

cursor: ${(props) => (props.isValid ? 'pointer' : 'not-allowed')};
    transition: background-color 0.3s;

    &:disabled {
        background: gray;
    }
`

export default Loginuseform;
