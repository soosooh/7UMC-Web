import axios from 'axios';

const API_URL = '/auth';

export const registerUser = async (data) => {
  const response = await axios.post(`${API_URL}/register`, {
    email: data.email,
    password: data.password,
    passwordCheck: data.passwordConfirm, 
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
