// pages/Popular.js
import React from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieList from '../components/MoveList';

const Popular = () => {
    const { movies, loading, error } = useFetchMovies('popular');

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>Error: {error}</div>;

    return <MovieList title="인기 있는 영화" movies={movies} />;
};

export default Popular;
