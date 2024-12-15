import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
    const [nickname, setNickname] = useState(localStorage.getItem("nickname") || "");

    const kakaoRestAPI = import.meta.env.VITE_KAKAO_TOKEN;
    const redirectURI = "http://localhost:5173/login"; // 로그아웃 후 이동할 URI


    // 로그인 상태 업데이트 함수
    const login = (nickname) => {
        setIsLoggedIn(true);
        setNickname(nickname);
        localStorage.setItem("nickname", nickname);
    };
    const logout = async () => {
        try {
            // Kakao 로그아웃 요청
            await axios.get(
                `https://kauth.kakao.com/oauth/logout?client_id=${kakaoRestAPI}&logout_redirect_uri=${redirectURI}`
            );
            console.log("Kakao 로그아웃 성공");
        } catch (error) {
            console.error("Kakao 로그아웃 실패:", error);
        }

        // 상태 초기화
        setIsLoggedIn(false);
        setNickname("");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("nickname");
    };

    // 앱 로드 시 초기 상태 설정
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const storedNickname = localStorage.getItem('nickname');

        if (token && storedNickname) {
            setIsLoggedIn(true);
            setNickname(storedNickname);
        } else {
            setIsLoggedIn(false);
            setNickname('');
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, nickname, logout , login}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);