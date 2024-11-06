// src/api.js
import axios from 'axios';

const API_URL = '/auth';

export const registerUser = async (data) => {
  // 서버가 예상하는 데이터 형식에 맞게 전달합니다.
  const response = await axios.post(`${API_URL}/register`, {
    email: data.email,
    password: data.password,
    passwordCheck: data.passwordConfirm, // 회원가입 시 사용하는 키가 passwordCheck라면 이대로 전달
  });
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post(`${API_URL}/login`, {
    email: data.email,
    password: data.password,
  });
  return response.data;
};
