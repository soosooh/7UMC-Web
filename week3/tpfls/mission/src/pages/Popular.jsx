// pages/Popular.js
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../mocks/movie';
import MovieList from '../components/MoveList';

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const popularMovies = await fetchPopularMovies();
                setMovies(popularMovies.results);
            } catch (error) {
                setError(error.message);
            }
        };

        getPopularMovies();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <MovieList title="인기 있는 영화" movies={movies} />;
};

export default Popular;
