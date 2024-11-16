// MovieList.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import MovieItem from '../Item/MovieItem';

const MovieList = ({ title, movies, loading, error }) => {
    const [hoveredMovieId, setHoveredMovieId] = useState(null);

    if (loading) return <LoadingMessage>로딩 중...</LoadingMessage>;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;

    return (
        <Container>
            <Title>{title}</Title>
            <MovieGrid>
                {movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onMouseEnter={(id) => setHoveredMovieId(id)}
                        onMouseLeave={() => setHoveredMovieId(null)}
                        isHovered={hoveredMovieId === movie.id}
                    />
                ))}
            </MovieGrid>
        </Container>
    );
};

// Styled Components
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

const LoadingMessage = styled.p`
    text-align: center;
    color: white;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

export default MovieList;
