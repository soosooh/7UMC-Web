import React from 'react';
import MovieList from '../components/Movies/MovieList';

const HomePage = () => {
    return (
        <div>
            <MovieList listType="popular" />
        </div>
    );
};

export default HomePage;