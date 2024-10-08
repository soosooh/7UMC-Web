import React, { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '../mocks/movie'; // 경로 조정 필요
import MovieList from '../components/MoveList';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTopRatedMovies = async () => {
            try {
                const topRatedMovies = await fetchTopRatedMovies();
                setMovies(topRatedMovies.results); // 응답 구조에 따라 조정
            } catch (error) {
                setError(error.message);
            }
        };

        getTopRatedMovies();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <MovieList title="높은 평가 영화" movies={movies} />;
};

export default TopRated;
