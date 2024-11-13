
import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

const MovieList = ({ movies }) => {
    return (
        <MoviesContainer>
            {movies.map(movie => (
                <MovieItem
                    key={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                />
            ))}
        </MoviesContainer>
    );
};

export default MovieList;
