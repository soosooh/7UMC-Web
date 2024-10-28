const apiKey = '1f0b99a5ed57c941ab2c7d69c334e53a'; // 본인의 API 키
const apiUrl = 'https://api.themoviedb.org/3/movie';

const fetchMovies = async (endpoint, language = 'ko-KR') => {
    try {
        const response = await fetch(`${apiUrl}${endpoint}?api_key=${apiKey}&language=${language}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // 성공적으로 데이터를 반환
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return { results: [], error: error.message }; // 에러 발생 시 빈 배열과 에러 메시지 반환
    }
};

// 특정 엔드포인트를 내보내는 방법
export const fetchNowPlayingMovies = () => fetchMovies('/now_playing');
export const fetchPopularMovies = () => fetchMovies('/popular');
export const fetchTopRatedMovies = () => fetchMovies('/top_rated');
export const fetchUpcomingMovies = () => fetchMovies('/upcoming');

// 추가된 검색 기능
export const searchMovies = (query) => fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
