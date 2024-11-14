import api from '../config';

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData || {}); // userData가 없으면 빈 객체 전송
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error.response ? error.response.data : new Error('로그인 실패');
  }
};
