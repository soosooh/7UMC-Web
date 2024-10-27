import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
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

export const fetchMovieDetail = (movieId) => api.get(`/movie/${movieId}`, {
  params: {
    language: 'ko-KR'
  }
});

export const fetchMovieCredits = (movieId) => api.get(`/movie/${movieId}/credits`, {
  params: {
    language: 'ko-KR'
  }
});

export default api;