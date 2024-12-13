import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

 

const login = (userData) => {
    console.log('Login userData:', userData); // 기존 로그
    if (!userData.email) {
        console.error('Email is missing in userData'); // 이메일 존재 여부 확인
        return;
    }
    setIsLoggedIn(true);
    setUser(userData);
    console.log('User state updated:', userData); // 상태 업데이트 확인
};

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    };

    const getNickname = () => {
        console.log('Current user:', user);
        const nickname = user?.email?.split('@')[0] || '';
        console.log('Extracted nickname:', nickname);
        return nickname;
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, user, getNickname }}>
            {children}
        </AuthContext.Provider>
    );
};
