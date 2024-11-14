import axios from "axios";

const API = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

API.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가
API.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');

                const response = await API.post("/auth/token/access", { token: refreshToken });
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);

                originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
                return API(originalRequest);
            } catch (refreshError) {
                console.error('토큰 재발급 오류: ', refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export { API };
