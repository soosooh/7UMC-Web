import axios from 'axios';
import tokenStorage from '../contexts/tokenStorage';
import { getRedirectURI } from './redirectURI';

const BASE_URL = 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

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
  },

  kakaoLogin: async (code) => {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('client_id', import.meta.env.VITE_KAKAO_TOKEN);
      params.append('redirect_uri', getRedirectURI());
      params.append('code', code);

      const response = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Kakao token error:', error);
      throw error;
    }
  },

  getKakaoUserInfo: async (accessToken) => {
    try {
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Kakao user info error:', error);
      throw error;
    }
  },
};

export default authApi;