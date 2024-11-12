import axios from 'axios';
import tokenStorage from '../contexts/tokenStorage';

const BASE_URL = 'http://localhost:3000';

// axios 인스턴스 생성
const axiosInstance = axios.create({
 baseURL: BASE_URL,
 headers: {
   'Content-Type': 'application/json',
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
 (error) => {
   return Promise.reject(error);
 }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
 (response) => response,
 async (error) => {
   const originalRequest = error.config;

   if (error.response?.status === 401 && !originalRequest._retry) {
     originalRequest._retry = true;

     try {
       const refreshToken = tokenStorage.getRefreshToken();
       const response = await axios.post(`${BASE_URL}/auth/token/access`, {}, {
         headers: {
           Authorization: `Bearer ${refreshToken}`
         }
       });

       const { accessToken, refreshToken: newRefreshToken } = response.data;
       tokenStorage.setTokens(accessToken, newRefreshToken);

       originalRequest.headers.Authorization = `Bearer ${accessToken}`;
       return axiosInstance(originalRequest);
     } catch (error) {
       tokenStorage.removeTokens();
       window.location.href = '/login';
       return Promise.reject(error);
     }
   }
   return Promise.reject(error);
 }
);

const authApi = {
 signup: async ({ email, password, passwordCheck }) => {
   try {
     console.log('Signup request:', { email, password, passwordCheck });
     const response = await axiosInstance.post('/auth/register', {
       email,
       password,
       passwordCheck
     });
     console.log('Signup response:', response.data);
     return response.data;
   } catch (error) {
     console.error('Signup error:', error.response?.data || error);
     throw error;
   }
 },

 login: async ({ email, password }) => {
   try {
     console.log('Login request:', { email, password });
     const response = await axiosInstance.post('/auth/login', {
       email,
       password
     });
     console.log('Login response:', response.data);
     return response.data;
   } catch (error) {
     console.error('Login error:', error.response?.data || error);
     throw error;
   }
 },

 getUserInfo: async () => {
   try {
     console.log('Getting user info...');
     const response = await axiosInstance.get('/user/me');
     console.log('User info response:', response.data);
     return response.data;
   } catch (error) {
     console.error('Get user info error:', error.response?.data || error);
     throw error;
   }
 }
};

export default authApi;