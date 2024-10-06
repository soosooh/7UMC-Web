import React from 'react';
import MovieList from '../../components/MovieList';

const UpcomingPage = () => {
    return (
        <div>
            <MovieList listType="upcoming" />
        </div>
    );
};

export default UpcomingPage;