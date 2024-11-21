import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        gap: 15px; 
    }

    @media (max-width: 768px) {
        gap: 10px; 
        padding: 15px; 
    }

    @media (max-width: 480px) {
        gap: 5px; 
        padding: 10px; 
    }
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

