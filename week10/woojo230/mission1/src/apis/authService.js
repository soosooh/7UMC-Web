// src/apis/authService.js
import axiosInstance from './axiosAuthInstance';

export const registerUser = async ({ email, password, passwordCheck }) => {
  const response = await axiosInstance.post('/auth/register', {
    email,
    password,
    passwordCheck,
  });
  return response.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await axiosInstance.post('/auth/login', { email, password });
  localStorage.setItem('accessToken', response.data.accessToken);
  localStorage.setItem('refreshToken', response.data.refreshToken);
  return response.data;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get('/user/me');
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  window.location.href = '/login';
};
