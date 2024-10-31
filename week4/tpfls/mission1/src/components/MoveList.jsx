// components/MovieList.js
import React from 'react';
import styled from 'styled-components';

const MovieList = ({ title, movies }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <MovieGrid>
                {movies.map((movie) => (
                    <MovieCard key={movie.id}>
                        <Poster src={`${movie.poster_path}`} alt={movie.title} />
                        <MovieInfo>
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date}</p>
                        </MovieInfo>
                    </MovieCard>
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

const MovieCard = styled.div`
    background-color: #1e1e1e;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

const Poster = styled.img`
    width: 100%;
    height: 225px;
    object-fit: cover; /* 이미지 비율을 유지하면서 잘리지 않도록 설정 */
`;

const MovieInfo = styled.div`
    padding: 10px;
    text-align: center;

    h2 {
        font-size: 1rem;
        margin: 10px 0 5px;
    }

    p {
        font-size: 0.9rem;
        color: #bbb;
    }
`;

export default MovieList;
