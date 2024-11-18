// NowPlaying.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNowPlayingMovies } from '../api/movie';
import MovieList from '../components/list/MovieList';

const NowPlaying = () => {
    const { isLoading, isError } = useQuery(['nowPlaying'], fetchNowPlayingMovies);

    return (
        <MovieList
            title="현재 상영중 영화"
            queryKey={['nowPlaying']}
            fetchFunction={fetchNowPlayingMovies}
        />
    );
};

export default NowPlaying;
