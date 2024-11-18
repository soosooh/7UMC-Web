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

// 요청 인터셉터
api.interceptors.request.use(config => {
  console.log('API Request:', config);
  return config;
});

// 응답 인터셉터
api.interceptors.response.use(
  response => {
    console.log('API Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const fetchPopular = ({ page = 1 } = {}) => {
  return api.get('/movie/popular', {
    params: { page }
  });
};

export const fetchTopRated = ({ page = 1 } = {}) => {
  return api.get('/movie/top_rated', {
    params: { page }
  });
};

export const fetchNowPlaying = ({ page = 1 } = {}) => {
  return api.get('/movie/now_playing', {
    params: { page }
  });
};

export const fetchUpcoming = ({ page = 1 } = {}) => {
  return api.get('/movie/upcoming', {
    params: { page }
  });
};

export const fetchMovieDetail = (movieId) => {
  return api.get(`/movie/${movieId}`, {
    params: {
      append_to_response: 'credits'
    }
  });
};

export const searchMovies = (params) => {
  if (!params?.query) return Promise.resolve({ data: { results: [] } });
  
  return api.get('/search/movie', {
    params: {
      ...params,
      include_adult: false,
      page: params.page || 1
    }
  });
};

export default api;