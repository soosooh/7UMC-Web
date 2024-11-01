import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ko-KR'
  }
});

export const fetchPopular = () => api.get('/popular', {
  params: {
    page: 1
  }
});

export const fetchTopRated = () => api.get('/top_rated', {
  params: {
    page: 1
  }
});

export const fetchNowPlaying = () => api.get('/now_playing', {
  params: {
    page: 1
  }
});

export const fetchUpcoming = () => api.get('/upcoming', {
  params: {
    page: 1
  }
});

export const fetchMovieDetail = (movieId) => api.get(`/${movieId}`, {
  params: {
    append_to_response: 'credits'  // credits 정보를 함께 요청
  }
});

export default api;