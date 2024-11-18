import api from '../config';

export const getUserInfo = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    
    // accessToken이 없으면 바로 에러를 던져 API 호출을 피함
    if (!accessToken) {
      throw new Error("토큰이 없습니다.");
    }

    const response = await api.get('/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("유저 정보 불러오기 실패");
  }
};
