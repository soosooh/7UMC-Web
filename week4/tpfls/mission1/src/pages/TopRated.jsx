// pages/TopRated.js
import React from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieList from '../components/MoveList';

const TopRated = () => {
    const { movies, loading, error } = useFetchMovies('toprated');

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>Error: {error}</div>;

    return <MovieList title="높은 평가 영화" movies={movies} />;
};

export default TopRated;
