import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzI5OTU1MWE0MzFhYTRkNzRmZTE2ZDMzZjcyOTVjYyIsIm5iZiI6MTcyODUzNTkxMi41NTc5MTksInN1YiI6IjY3MDc1NWNiYzkyYzJlNTZkODYxMjQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ezxl5BeklL6-wupMVQRVrcoG5AByNmOLwZ_l6yDhYI0';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'accept': 'application/json'
  }
});

// 현재 날짜와 한 달 후의 날짜를 계산하는 함수
const getDateRange = () => {
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  
  const formatDate = (date) => date.toISOString().split('T')[0];
  
  return {
    min_date: formatDate(today),
    max_date: formatDate(nextMonth)
  };
};

export const fetchPopular = () => api.get('/discover/movie', {
  params: {
    include_adult: false,
    include_video: false,
    language: 'ko-KR',
    page: 1,
    sort_by: 'popularity.desc'
  }
});

export const fetchTopRated = () => api.get('/discover/movie', {
  params: {
    include_adult: false,
    include_video: false,
    language: 'ko-KR',
    page: 1,
    sort_by: 'vote_average.desc',
    'without_genres': '99,10755',
    'vote_count.gte': 200
  }
});

export const fetchNowPlaying = () => {
  const { min_date, max_date } = getDateRange();
  return api.get('/discover/movie', {
    params: {
      include_adult: false,
      include_video: false,
      language: 'ko-KR',
      page: 1,
      sort_by: 'popularity.desc',
      with_release_type: '2|3',
      'release_date.gte': min_date,
      'release_date.lte': max_date
    }
  });
};

export const fetchUpcoming = () => {
  const { max_date } = getDateRange();
  return api.get('/discover/movie', {
    params: {
      include_adult: false,
      include_video: false,
      language: 'ko-KR',
      page: 1,
      sort_by: 'popularity.desc',
      'release_date.gte': max_date
    }
  });
};

export default api;