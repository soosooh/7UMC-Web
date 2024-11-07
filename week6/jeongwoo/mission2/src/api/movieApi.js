// src/api/movieApi.js
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ko-KR'
  }
});

// 기존 API 함수들
export const fetchPopular = () => api.get('/movie/popular', {
  params: {
    page: 1
  }
});

export const fetchTopRated = () => api.get('/movie/top_rated', {
  params: {
    page: 1
  }
});

export const fetchNowPlaying = () => api.get('/movie/now_playing', {
  params: {
    page: 1
  }
});

export const fetchUpcoming = () => api.get('/movie/upcoming', {
  params: {
    page: 1
  }
});

export const fetchMovieDetail = (movieId) => api.get(`/movie/${movieId}`, {
  params: {
    append_to_response: 'credits'
  }
});

// 수정된 검색 API 함수
export const searchMovies = (params) => {
  console.log('Search Params:', params);  // 파라미터 확인
  
  if (!params?.query) return Promise.resolve({ data: { results: [] } });
  
  return api.get('/search/movie', {
    params: {
      ...params,
      include_adult: false,
      page: params.page || 1
    }
  }).then(response => {
    console.log('Search Response:', response);  // 응답 확인
    return response;
  }).catch(error => {
    console.error('Search Error:', error);  // 에러 확인
    throw error;
  });
};

export default api;