// pages/Upcoming.js
import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../mocks/movie';
import MovieList from '../components/MoveList';

const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUpcomingMovies = async () => {
            try {
                const upcomingMovies = await fetchUpcomingMovies();
                setMovies(upcomingMovies.results);
            } catch (error) {
                setError(error.message);
            }
        };

        getUpcomingMovies();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <MovieList title="개봉 예정 영화" movies={movies} />;
};

export default Upcoming;
