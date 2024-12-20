import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkLoginStatus = () => {
            const storedUser = localStorage.getItem('user');
            console.log('Stored user from localStorage:', storedUser);
            
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                console.log('Parsed user:', parsedUser);
                setUser(parsedUser);
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
        // localStorage 변경을 감지하기 위한 이벤트 리스너 추가
        window.addEventListener('storage', checkLoginStatus);
        
        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    // context를 전역적으로 접근 가능하게 만듦
    useEffect(() => {
        window.authContext = {
            login,
            logout,
            getNickname
        };
        
        return () => {
            delete window.authContext;
        };
    }, []);

    const login = (userData) => {
        console.log('Login 함수 호출됨:', userData);
        
        if (userData.kakaoId) {
            console.log('카카오 로그인 처리 중...');
            const loginData = {
                ...userData,
                loginType: 'kakao',
                email: userData.email || `kakao_${userData.kakaoId}@kakao.com`
            };
            console.log('저장할 로그인 데이터:', loginData);
            
            localStorage.setItem('user', JSON.stringify(loginData));
            setIsLoggedIn(true);
            setUser(loginData);
            console.log('카카오 로그인 완료:', loginData);
            return;
        }

        if (!userData.email) {
            console.error('Email is missing in userData');
            return;
        }

        const loginData = {
            ...userData,
            loginType: 'local'
        };

        console.log('일반 로그인 데이터:', loginData);
        localStorage.setItem('user', JSON.stringify(loginData));
        setIsLoggedIn(true);
        setUser(loginData);
        console.log('일반 로그인 완료:', loginData);
    };

    const logout = async () => {
        console.log('로그아웃 시작');
        
        // 카카오 로그아웃 처리
        if (user?.loginType === 'kakao') {
            try {
                const response = await fetch('https://kapi.kakao.com/v1/user/logout', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('kakao_access_token')}`
                    }
                });
                
                if (!response.ok) {
                    console.error('카카오 로그아웃 실패:', response.status);
                }
            } catch (error) {
                console.error('카카오 로그아웃 중 에러 발생:', error);
            }
        }

        // Context 상태 초기화
        setUser(null);
        setIsLoggedIn(false);

        // 로컬스토리지 데이터 제거
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('kakao_access_token');
        localStorage.removeItem('kakao_refresh_token');
        localStorage.removeItem('kakao_user');
        
        console.log('로그아웃 완료');
    };

    const getNickname = () => {
        console.log('getNickname called, current user:', user);
        
        if (!user) {
            console.log('No user found');
            return '';
        }

        if (user.loginType === 'kakao') {
            console.log('Kakao user nickname:', user.nickname);
            return user.nickname || '';
        }

        console.log('Local user nickname:', user.nickname || user.email?.split('@')[0]);
        return user.nickname || (user.email ? user.email.split('@')[0] : '');
    };

    const contextValue = {
        isLoggedIn,
        login,
        logout,
        user,
        getNickname
    };

    console.log('AuthContext current state:', contextValue);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;