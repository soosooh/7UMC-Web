import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const fetchUser = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || '로그인 요청에 실패했습니다.');
    }
};

export const useAuth = () => {
    const { login } = useContext(AuthContext);

    return useMutation({
        mutationFn: (credentials) => fetchUser(credentials),
        onSuccess: (data) => {
            console.log('로그인 성공 데이터:', data);
        
            // 데이터가 { accessToken, refreshToken, user } 구조인지 확인
            const userData = data.user || { email: data.email }; // `user`가 없으면 email을 직접 사용
        
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
        
            login(userData); // AuthContext의 user 상태에 저장
        },
        
        onError: (error) => {
            console.error("로그인 실패:", error);
            alert(error.message || "로그인에 실패했습니다. 다시 시도해주세요.");
        },
    });
};
