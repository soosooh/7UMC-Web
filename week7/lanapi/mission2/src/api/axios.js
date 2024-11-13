import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`, // 환경 변수를 사용하여 토큰 설정
  },
});

export default axiosInstance;

