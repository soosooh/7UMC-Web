import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzI5OTU1MWE0MzFhYTRkNzRmZTE2ZDMzZjcyOTVjYyIsIm5iZiI6MTcyODUzNTkxMi41NTc5MTksInN1YiI6IjY3MDc1NWNiYzkyYzJlNTZkODYxMjQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ezxl5BeklL6-wupMVQRVrcoG5AByNmOLwZ_l6yDhYI0';  

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
export const fetchPopular = () => api.get('/movie/popular', {
  params: {
    language: 'ko-KR',
    page: 1
  }
});

export const fetchTopRated = () => api.get('/movie/top_rated', {
  params: {
    language: 'ko-KR',
    page: 1
  }
});

export const fetchNowPlaying = () => api.get('/movie/now_playing', {
  params: {
    language: 'ko-KR',
    page: 1
  }
});

export const fetchUpcoming = () => api.get('/movie/upcoming', {
  params: {
    language: 'ko-KR',
    page: 1
  }
});

export default api;