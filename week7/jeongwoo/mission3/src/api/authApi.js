// src/api/authApi.js
import axios from 'axios';
import tokenStorage from '../contexts/tokenStorage';

const BASE_URL = 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 토큰 만료 시 재발급 처리
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = tokenStorage.getRefreshToken();
        const { data } = await axios.post(
          `${BASE_URL}/auth/token/access`,
          {},
          {
            headers: { Authorization: `Bearer ${refreshToken}` }
          }
        );

        const { accessToken, refreshToken: newRefreshToken } = data;
        tokenStorage.setTokens(accessToken, newRefreshToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        tokenStorage.removeTokens();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const authApi = {
  signup: async (userData) => {
    try {
      const { email, password, passwordCheck } = userData;
      console.log('Signup request:', { email, password, passwordCheck });
      
      const { data } = await axiosInstance.post('/auth/register', {
        email,
        password,
        passwordCheck
      });

      // 회원가입 성공 시 토큰 저장
      const { accessToken, refreshToken } = data;
      if (accessToken && refreshToken) {
        tokenStorage.setTokens(accessToken, refreshToken);
      }

      return data;
    } catch (error) {
      console.error('Signup error:', error.response?.data);
      throw error;
    }
  },

  login: async (userData) => {
    try {
      const { email, password } = userData;
      console.log('Login request:', { email, password });
      
      const { data } = await axiosInstance.post('/auth/login', {
        email,
        password
      });

      // 로그인 성공 시 토큰 저장
      const { accessToken, refreshToken } = data;
      if (accessToken && refreshToken) {
        tokenStorage.setTokens(accessToken, refreshToken);
      }

      return data;
    } catch (error) {
      console.error('Login error:', error.response?.data);
      throw error;
    }
  },

  getUserInfo: async () => {
    try {
      const { data } = await axiosInstance.get('/user/me');
      return data;
    } catch (error) {
      console.error('Get user info error:', error.response?.data);
      throw error;
    }
  }
};

export default authApi;