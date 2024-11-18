// movie.js
const apiUrl = 'https://api.themoviedb.org/3/movie';
const apiKey = '1f0b99a5ed57c941ab2c7d69c334e53a'; // 하드코딩된 API 키


const fetchMovies = async (endpoint, language = 'ko-KR') => {
    try {
        const response = await fetch(`${apiUrl}${endpoint}?api_key=${apiKey}&language=${language}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return { results: [], error: error.message };
    }
};

export const fetchMovieDetail = (movieId) => fetchMovies(`/${movieId}`);
export const fetchMovieCredits = (movieId) => fetchMovies(`/${movieId}/credits`);

export const fetchNowPlayingMovies = () => fetchMovies('/now_playing');
export const fetchPopularMovies = () => fetchMovies('/popular');
export const fetchTopRatedMovies = () => fetchMovies('/top_rated');
export const fetchUpcomingMovies = () => fetchMovies('/upcoming');
export const searchMovies = (query) => fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
