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

const fetchMovies = async (endpoint, params = {}) => {
 try {
   const defaultParams = { page: params.page || 1 };
   // search/movie는 movie/ 경로가 필요 없음
   const url = endpoint.startsWith('search/') ? `/${endpoint}` : `/movie/${endpoint}`;
   return await api.get(url, {
     params: { ...defaultParams, ...params }
   });
 } catch (error) {
   console.error(`Fetch ${endpoint} Error:`, error);
   throw error;
 }
};

export const fetchPopular = (params) => fetchMovies('popular', params);
export const fetchTopRated = (params) => fetchMovies('top_rated', params);
export const fetchNowPlaying = (params) => fetchMovies('now_playing', params);
export const fetchUpcoming = (params) => fetchMovies('upcoming', params);
export const fetchMovieDetail = (movieId) => fetchMovies(`${movieId}`, {
 append_to_response: 'credits'
});

export const searchMovies = (params) => {
 if (!params?.query) return Promise.resolve({ data: { results: [] } });
 return fetchMovies('search/movie', {
   ...params,
   include_adult: false
 });
};

export default api;