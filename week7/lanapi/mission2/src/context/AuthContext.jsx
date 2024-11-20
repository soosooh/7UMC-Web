import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData); // 서버에서 받은 사용자 정보 저장
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    };

    const getNickname = () => user?.email?.split('@')[0] || '게스트';

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, getNickname }}>
            {children}
        </AuthContext.Provider>
    );
};


// import { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null);

 
//     const login = (userData) => {
//         setIsLoggedIn(true);
//         setUser(userData);
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//         setUser(null);
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('refreshToken');
//     };

//     const getNickname = () => user?.email?.split('@')[0] || '';

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout, user, getNickname }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
