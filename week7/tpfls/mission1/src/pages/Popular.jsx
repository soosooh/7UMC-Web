// Popular.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovies } from '../api/movie';
import MovieList from '../components/list/MovieList';

const Popular = () => {
    const { isLoading, isError } = useQuery(['popularMovies'], fetchPopularMovies);

    return (
        <MovieList
            title="인기 있는 영화"
            queryKey={['popularMovies']}
            fetchFunction={fetchPopularMovies}
        />
    );
};

export default Popular;
