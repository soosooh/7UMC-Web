const API_BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  'Content-Type': 'application/json;charset=utf-8',
};

export const fetchNowPlayingMovies = async () => {
    const response = await fetch(`${API_BASE_URL}/movie/now_playing?language=ko-KR`, { headers });
    const data = await response.json();
    return data.results;
};
  
export const fetchPopularMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/popular?language=ko-KR`, { headers });
  const data = await response.json();
  return data.results;
};

export const fetchTopRatedMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/top_rated?language=ko-KR`, { headers });
  const data = await response.json();
  return data.results;
};

export const fetchUpcomingMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/upcoming?language=ko-KR`, { headers });
  const data = await response.json();
  return data.results;
};
