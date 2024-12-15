import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { getRedirectURI } from "../api/redirectURI";
import axios from "axios";
import Kakaologin from "../assets/image/kakaoBtn.png";

const KakaoLoginButton = styled.img`
    width: 100%;
    cursor: pointer;
`;

const LoginKakao = ({ setUserEmail }) => { // setUserEmail Prop 추가
    const kakaoRestAPIKey = import.meta.env.VITE_KAKAO_TOKEN;
    const redirectURI = getRedirectURI();
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestAPIKey}&redirect_uri=${redirectURI}&response_type=code`;

    const [authCode, setAuthCode] = useState(null);

    const redirectToKakaoLogin = () => {
        window.location.href = kakaoAuthURL; // 카카오 인증 URL로 리다이렉션
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code'); // URL에서 'code' 파라미터 추출
        if (code) {
            setAuthCode(code); // 인가 코드 상태에 저장
        }
    }, []);

    useEffect(() => {
        if (authCode) {
            requestAccessToken(authCode); // 인가 코드로 액세스 토큰 요청
        }
    }, [authCode]);

    const requestAccessToken = async (code) => {
        const createFormData = (params) => {
            const formData = new URLSearchParams();
            for (const key in params) {
                formData.append(key, params[key]);
            }
            return formData;
        };

        try {
            const response = await axios.post('https://kauth.kakao.com/oauth/token', createFormData({
                grant_type: 'authorization_code',
                client_id: kakaoRestAPIKey,
                redirect_uri: redirectURI,
                code // 인가 코드 전달
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
            });

            const { access_token: accessToken } = response.data;
            if (accessToken) {
                localStorage.setItem('token', accessToken); // 액세스 토큰 저장
                fetchUserInfo(accessToken); // 사용자 정보 요청
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchUserInfo = async (accessToken) => {
        try {
            const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            const { nickname: username } = response.data.kakao_account.profile;
            localStorage.setItem('username', username); // 사용자 이름 저장
            setUserEmail(username); // userEmail 상태 업데이트
            window.location.href = "/"; // 메인 페이지로 이동
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <KakaoLoginButton src={Kakaologin} alt="Kakao login button" onClick={redirectToKakaoLogin} />
    );
};

export default LoginKakao;
