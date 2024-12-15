import axios from 'axios';
import { useAuth } from '../contexts/LoginContext';


// 영화 API용 axiosInstance
const movieApi = axios.create({
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMBD_TOKKEN}`, // 기본 TMDB 토큰
    },
});

// 카카오 API용 axiosInstance
const kakaoApi = axios.create({
    baseURL: "https://kapi.kakao.com",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
});

// 영화 API 요청에 대해 토큰 관리
movieApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken"); // 영화 API용 토큰
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


const axiosInstance = axios.create({
    headers:{
        Authorization : `Bearer ${import.meta.env.VITE_TMBD_TOKKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

movieApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                try {
                    // 리프레시 토큰을 사용해 새 액세스 토큰 발급
                    const response = await movieApi.post("/refresh-token", { refreshToken });
                    const { accessToken } = response.data;

                    // 새 토큰 저장 및 헤더 업데이트
                    localStorage.setItem("accessToken", accessToken);
                    movieApi.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
                    originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

                    // 원래 요청 재시도
                    return movieApi(originalRequest);
                } catch (refreshError) {
                    console.error("토큰 갱신 실패:", refreshError);
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    window.location.href = "/login"; // 로그아웃 처리
                }
            }
        }
        return Promise.reject(error);
    }
);

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

export { movieApi, kakaoApi}