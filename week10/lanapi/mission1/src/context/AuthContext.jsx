// import { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         const accessToken = localStorage.getItem('accessToken');

//         if (storedUser && accessToken) {
//             setUser(storedUser);
//             setIsLoggedIn(true);
//         }
//     }, []);

//     // 카카오 로그인과 일반 로그인을 모두 지원하는 login 함수
//     const login = (userData) => {
//         console.log('Login userData:', userData);

//         // 카카오 로그인의 경우 kakaoId와 nickname이 필수
//         if (userData.kakaoId) {
//             const loginData = {
//                 ...userData,
//                 loginType: 'kakao',
//                 email: userData.email || `kakao_${userData.kakaoId}@kakao.com`
//             };
//             localStorage.setItem('user', JSON.stringify(loginData));
//             setIsLoggedIn(true);
//             setUser(loginData);
//             console.log('Kakao login successful:', loginData);
//             return;
//         }

//         // 일반 로그인의 경우 이메일 필수
//         if (!userData.email) {
//             console.error('Email is missing in userData');
//             return;
//         }

//         const loginData = {
//             ...userData,
//             loginType: 'local'
//         };

//         localStorage.setItem('user', JSON.stringify(loginData));
//         setIsLoggedIn(true);
//         setUser(loginData);
//         console.log('Local login successful:', loginData);
//     };

//     const logout = () => {
//         setUser(null);
//         setIsLoggedIn(false);

//         // 모든 로그인 관련 로컬 스토리지 항목 제거
//         localStorage.removeItem('user');
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('kakaoAccessToken');
//         localStorage.removeItem('userNickname');

//         console.log('로그아웃 완료');
//     };

//     const getNickname = () => {
//         if (!user) return '';

//         // 카카오 로그인의 경우 nickname 우선 사용
//         if (user.kakaoId === 'kakao') {
//             return user.nickname || '';
//         }

//         // 일반 로그인의 경우 닉네임 또는 이메일 사용
//         return user.nickname || user.email.split('@')[0] || '';
//     };

//     return (
//         <AuthContext.Provider value={{
//             isLoggedIn,
//             login,
//             logout,
//             user,
//             getNickname
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// AuthContext.jsx
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

    const logout = () => {
        console.log('로그아웃 시작');
        setUser(null);
        setIsLoggedIn(false);

        // 모든 인증 관련 데이터 제거
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