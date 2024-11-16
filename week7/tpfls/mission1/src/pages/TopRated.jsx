// TopRated.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopRatedMovies } from '../api/movie';
import MovieList from '../components/list/MovieList';

const TopRated = () => {
    const { isLoading, isError } = useQuery(['topRatedMovies'], fetchTopRatedMovies);

    return (
        <MovieList
            title="높은 평가 영화"
            queryKey={['topRatedMovies']}
            fetchFunction={fetchTopRatedMovies}
        />
    );
};

export default TopRated;
