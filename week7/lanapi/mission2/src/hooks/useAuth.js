
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const fetchUser = async (credentials) => {
    const response = await axios.post('http://localhost:3000/auth/login', credentials);
    return response.data;
};

export const useAuth = (credentials) => {
    const { login } = useContext(AuthContext);

    return useQuery({
        queryKey: ['user', credentials],
        queryFn: () => fetchUser(credentials),
        enabled: false,
        onSuccess: (data) => {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            login(data.user);
        },
        onError: (error) => {
            console.error("로그인 실패:", error);
            alert("로그인에 실패했습니다. 다시 시도해주세요.");
        },
    });
};
