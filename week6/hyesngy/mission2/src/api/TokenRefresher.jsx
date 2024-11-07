import axios from 'axios';
import { useEffect } from 'react';

function TokenRefresher({ children }) {

  useEffect(() => {
    const refreshAPI = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}`,
      headers: { "Content-type": "application/json" },
    });

    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // 401 에러
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = localStorage.getItem('refreshToken');

          if (!refreshToken) {
            window.location.href = '/login';

            return Promise.reject(error);
          }

          try {
            const response = await refreshAPI.post('/auth/token/access', {}, {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            });

            const newAccessToken = response.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return axios(originalRequest);
          } catch (refreshError) {
            console.error('토큰 재발급 실패:', refreshError);
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);
  return children;
}

export default TokenRefresher;
