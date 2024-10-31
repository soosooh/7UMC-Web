// pages/NowPlaying.js
import React from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieList from '../components/MoveList';

const NowPlaying = () => {
    const { movies, loading, error } = useFetchMovies('nowplaying');

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>Error: {error}</div>;

    return <MovieList title="현재 상영중 영화" movies={movies} />;
};

export default NowPlaying;
