import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
    const [nickname, setNickname] = useState(localStorage.getItem("nickname") || "");


    // // 로그인 함수
    // const login = (nickname) => {
    //     setIsLoggedIn(true);
    //     setNickname(nickname);
    // };
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('nickname'); // 닉네임 삭제
        setIsLoggedIn(false);
        setNickname('');
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
        <AuthContext.Provider value={{ isLoggedIn, nickname, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);