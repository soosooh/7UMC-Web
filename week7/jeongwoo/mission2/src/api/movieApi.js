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

api.interceptors.request.use(config => {
  console.log('API Request:', config);
  return config;
});

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

export const fetchPopular = async ({ pageParam = 1 }) => {
  const response = await api.get('/movie/popular', {
    params: { page: pageParam }
  });
  return response;
};

export const fetchTopRated = async ({ pageParam = 1 }) => {
  const response = await api.get('/movie/top_rated', {
    params: { page: pageParam }
  });
  return response;
};

export const fetchNowPlaying = async ({ pageParam = 1 }) => {
  const response = await api.get('/movie/now_playing', {
    params: { page: pageParam }
  });
  return response;
};

export const fetchUpcoming = async ({ pageParam = 1 }) => {
  const response = await api.get('/movie/upcoming', {
    params: { page: pageParam }
  });
  return response;
};

export const fetchMovieDetail = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: {
      append_to_response: 'credits'
    }
  });
  return response;
};

export const searchMovies = async (params) => {
  if (!params?.query) return { data: { results: [] } };
  
  const response = await api.get('/search/movie', {
    params: {
      ...params,
      include_adult: false,
      page: params.page || 1
    }
  });
  return response;
};

export default api;