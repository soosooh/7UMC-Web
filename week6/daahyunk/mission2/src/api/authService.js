import api from "./config"; 

export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await api.post("/auth/token/access", null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const { accessToken, refreshToken: newRefreshToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken);

    return accessToken;
  } catch (error) {
    console.error("토큰 재발급 실패:", error);
    throw error;
  }
};
