import axios from "axios";

export const BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// accessToken 재발급 함수
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axios.post(`${BASE_URL}/auth/refresh`, { token: refreshToken });
    const newAccessToken = response.data.accessToken;

    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("토큰 재발급 실패:", error);
    throw error;
  }
};

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // accessToken 만료 시
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest); // 요청 재시도
      } catch (err) {
        console.error("재발급 후 요청 실패:", err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
