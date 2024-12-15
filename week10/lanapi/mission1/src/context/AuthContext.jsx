import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // 초기 상태 복원
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const accessToken = localStorage.getItem('accessToken');

        if (storedUser && accessToken) {
            setUser(storedUser);
            setIsLoggedIn(true);
        }
    }, []);

    // 카카오 로그인과 일반 로그인을 모두 지원하는 login 함수
    const login = (userData) => {
        console.log('Login userData:', userData);

        // 이메일 존재 여부 확인
        if (!userData.email) {
            console.error('Email is missing in userData');
            return;
        }

        // 로그인 타입 추가 (기본값은 'local', 카카오 로그인의 경우 'kakao')
        const loginData = {
            ...userData,
            loginType: userData.loginType || 'local'
        };

        // 로컬 스토리지에 사용자 정보 저장
        localStorage.setItem('user', JSON.stringify(loginData));

        setIsLoggedIn(true);
        setUser(loginData);
        console.log('User state updated:', loginData);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);

        // 모든 로그인 관련 로컬 스토리지 항목 제거
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('kakaoAccessToken');
        localStorage.removeItem('userNickname');

        console.log('로그아웃 완료');
    };

    const getNickname = () => {
        if (!user) return '';

        // 카카오 로그인의 경우 이메일의 첫 부분 또는 특정 닉네임 사용
        if (user.loginType === 'kakao') {
            return user.nickname || user.email.split('@')[0];
        }

        // 일반 로그인의 경우 닉네임 또는 이메일 사용
        return user.nickname || user.email.split('@')[0] || '';
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            login,
            logout,
            user,
            getNickname
        }}>
            {children}
        </AuthContext.Provider>
    );
};
