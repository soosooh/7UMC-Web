import axios from 'axios';
import { useAuth } from '../contexts/LoginContext';

const axiosInstance = axios.create({
    headers:{
        Authorization : `Bearer ${import.meta.env.VITE_TMBD_TOKKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                try {
                    const response = await axios.post('/refresh-token', { refreshToken });
                    const { accessToken } = response.data;

                    localStorage.setItem('accessToken', accessToken);
                    axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
                    originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

                    return axiosInstance(originalRequest); // 재요청
                } catch (refreshError) {
                    useAuth().logout(); // refreshToken 만료 시 로그아웃
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
);

export {axiosInstance}