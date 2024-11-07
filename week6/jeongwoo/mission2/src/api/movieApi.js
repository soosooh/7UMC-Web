import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// API 키 로드 확인
console.log('API_KEY:', API_KEY);

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

export const fetchPopular = () => {
 const url = `${BASE_URL}/movie/popular`;
 console.log('Popular Request URL:', url);
 console.log('With API Key:', API_KEY);
 
 return api.get('/movie/popular', {
   params: {
     page: 1
   }
 }).then(response => {
   console.log('Popular Response:', response);
   return response;
 }).catch(error => {
   console.error('Popular Error:', error);
   throw error;
 });
};

export const fetchTopRated = () => {
 const url = `${BASE_URL}/movie/top_rated`;
 console.log('Top Rated Request URL:', url);
 console.log('With API Key:', API_KEY);

 return api.get('/movie/top_rated', {
   params: {
     page: 1
   }
 }).then(response => {
   console.log('Top Rated Response:', response);
   return response;
 }).catch(error => {
   console.error('Top Rated Error:', error);
   throw error;
 });
};

export const fetchNowPlaying = () => {
 const url = `${BASE_URL}/movie/now_playing`;
 console.log('Now Playing Request URL:', url);
 console.log('With API Key:', API_KEY);

 return api.get('/movie/now_playing', {
   params: {
     page: 1
   }
 }).then(response => {
   console.log('Now Playing Response:', response);
   return response;
 }).catch(error => {
   console.error('Now Playing Error:', error);
   throw error;
 });
};

export const fetchUpcoming = () => {
 const url = `${BASE_URL}/movie/upcoming`;
 console.log('Upcoming Request URL:', url);
 console.log('With API Key:', API_KEY);

 return api.get('/movie/upcoming', {
   params: {
     page: 1
   }
 }).then(response => {
   console.log('Upcoming Response:', response);
   return response;
 }).catch(error => {
   console.error('Upcoming Error:', error);
   throw error;
 });
};

export const fetchMovieDetail = (movieId) => {
 const url = `${BASE_URL}/movie/${movieId}`;
 console.log('Movie Detail Request URL:', url);
 console.log('With API Key:', API_KEY);

 return api.get(`/movie/${movieId}`, {
   params: {
     append_to_response: 'credits'
   }
 }).then(response => {
   console.log('Movie Detail Response:', response);
   return response;
 }).catch(error => {
   console.error('Movie Detail Error:', error);
   throw error;
 });
};

export const searchMovies = (params) => {
 console.log('Search Params:', params);
 const url = `${BASE_URL}/search/movie`;
 console.log('Search Request URL:', url);
 console.log('With API Key:', API_KEY);
 
 if (!params?.query) return Promise.resolve({ data: { results: [] } });
 
 return api.get('/search/movie', {
   params: {
     ...params,
     include_adult: false,
     page: params.page || 1
   }
 }).then(response => {
   console.log('Search Response:', response);
   return response;
 }).catch(error => {
   console.error('Search Error:', error);
   throw error;
 });
};

export default api;