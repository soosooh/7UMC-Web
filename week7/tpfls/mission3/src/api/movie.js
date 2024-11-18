// api/movie.js
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

// 사용자 정보를 가져오는 함수 추가
export const fetchUserInfo = async () => {
    try {
        const response = await fetch('https://api.example.com/user', {
            headers: {
                Authorization: `Bearer YOUR_API_TOKEN`, // 필요한 경우 인증 헤더 추가
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return { error: error.message };
    }
};

export const fetchMovieDetail = (movieId) => fetchMovies(`/${movieId}`);
export const fetchMovieCredits = (movieId) => fetchMovies(`/${movieId}/credits`);
export const fetchNowPlayingMovies = () => fetchMovies('/now_playing');
export const fetchPopularMovies = () => fetchMovies('/popular');
export const fetchTopRatedMovies = () => fetchMovies('/top_rated');
export const fetchUpcomingMovies = () => fetchMovies('/upcoming');
export const searchMovies = (query) => fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
