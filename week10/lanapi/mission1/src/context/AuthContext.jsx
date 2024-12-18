import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

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

        // 카카오 로그인의 경우 kakaoId와 nickname이 필수
        if (userData.kakaoId) {
            const loginData = {
                ...userData,
                loginType: 'kakao',
                email: userData.email || `kakao_${userData.kakaoId}@kakao.com`
            };
            localStorage.setItem('user', JSON.stringify(loginData));
            setIsLoggedIn(true);
            setUser(loginData);
            console.log('Kakao login successful:', loginData);
            return;
        }

        // 일반 로그인의 경우 이메일 필수
        if (!userData.email) {
            console.error('Email is missing in userData');
            return;
        }

        const loginData = {
            ...userData,
            loginType: 'local'
        };

        localStorage.setItem('user', JSON.stringify(loginData));
        setIsLoggedIn(true);
        setUser(loginData);
        console.log('Local login successful:', loginData);
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

        // 카카오 로그인의 경우 nickname 우선 사용
        if (user.kakaoId === 'kakao') {
            return user.nickname || '';
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
