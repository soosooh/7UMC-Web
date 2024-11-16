// Upcoming.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUpcomingMovies } from '../api/movie';
import MovieList from '../components/list/MovieList';

const Upcoming = () => {
    const { isLoading, isError } = useQuery(['upcomingMovies'], fetchUpcomingMovies);

    return (
        <MovieList
            title="개봉 예정 영화"
            queryKey={['upcomingMovies']}
            fetchFunction={fetchUpcomingMovies}
        />
    );
};

export default Upcoming;
