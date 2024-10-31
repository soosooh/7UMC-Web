import React from 'react';
import MovieList from '../../components/Movies/MovieList';

const PopularPage = () => {
    return (
        <div>
            <MovieList listType="popular" />
        </div>
    );
};

export default PopularPage;