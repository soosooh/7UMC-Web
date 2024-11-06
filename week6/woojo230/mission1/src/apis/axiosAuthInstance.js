// src/apis/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/token/access",
            {},
            {
              headers: { Authorization: `Bearer ${refreshToken}` },
            }
          );
          const newAccessToken = response.data.accessToken;

          // 새로운 accessToken을 로컬 스토리지에 저장
          localStorage.setItem("accessToken", newAccessToken);

          // 원래 요청의 Authorization 헤더를 갱신된 토큰으로 설정
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          // 갱신된 토큰으로 원래 요청을 다시 보냄
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("토큰 갱신 실패:", refreshError);
          // refreshToken도 만료되었거나 유효하지 않을 때, 로그아웃 처리
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login"; // 로그인 페이지로 이동
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
