// pages/Upcoming.js
import React from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieList from '../components/MoveList';

const Upcoming = () => {
    const { movies, loading, error } = useFetchMovies('upcoming');

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>Error: {error}</div>;

    return <MovieList title="개봉 예정 영화" movies={movies} />;
};

export default Upcoming;
