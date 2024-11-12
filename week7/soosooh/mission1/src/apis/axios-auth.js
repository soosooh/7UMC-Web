import axios from "axios";

const axiosAuth = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: "http://localhost:3000",
});

// Interceptor를 통해 토큰 만료 시 자동 재발급 처리
axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // AccessToken이 만료된 경우
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      // Refresh Token 가져오기
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          // Refresh Token으로 Access Token 재발급 요청
          const { data } = await axios.post(
            "http://localhost:3000/auth/refresh-token",
            {
              refreshToken,
            }
          );

          // 새로운 Access Token 저장
          localStorage.setItem("accessToken", data.accessToken);

          // axios 인스턴스에 새로운 Access Token 설정
          axiosAuth.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;

          // 원래의 요청에 새로운 Access Token 추가하여 재요청
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
          return axiosAuth(originalRequest);
        } catch (err) {
          console.error("토큰 재발급 실패:", err);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login"; // 로그아웃 처리
        }
      }
    }

    // 에러가 있는 경우 그대로 반환
    return Promise.reject(error);
  }
);

export { axiosAuth };
