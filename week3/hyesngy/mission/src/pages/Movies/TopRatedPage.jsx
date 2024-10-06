import React from 'react';
import MovieList from '../../components/MovieList';

const TopRatedPage = () => {
    return (
        <div>
            <MovieList listType="top_rated" />
        </div>
    );
};

export default TopRatedPage;
