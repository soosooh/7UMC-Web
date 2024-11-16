import React from 'react';
import styled from 'styled-components';
import MovieItem from '../Item/MovieItem';

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) {
        return <ErrorMessage>표시할 영화가 없습니다.</ErrorMessage>;
    }

    return (
        <Container>
            <Title>{title}</Title>
            <MovieGrid>
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </MovieGrid>
        </Container>
    );
};

const Container = styled.div`
    padding: 30px;
    color: white;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: white;
`;

const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

export default MovieList;
