import React from 'react';
import { MOVIES } from '../mocks/movies';
import MovieItem from './MovieItem';

const MovieList = () => {
    return (
        <div className="movie-list">
            {MOVIES.results.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
