// MovieList.jsx
import React from 'react';
import styled from 'styled-components';
import MovieItem from '../Item/MovieItem';
import Skeleton from 'react-loading-skeleton'; // 스켈레톤 UI 라이브러리

const MovieList = ({ title, movies, fetchNextPage, hasNextPage, isLoading }) => {
    if (isLoading) return <LoadingMessage><Skeleton count={5} /></LoadingMessage>;

    return (
        <Container>
            <Title>{title}</Title>
            <MovieGrid>
                {movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </MovieGrid>
            {hasNextPage && (
                <LoadMoreButton onClick={fetchNextPage}>더 보기</LoadMoreButton>
            )}
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

const LoadMoreButton = styled.button`
    margin-top: 20px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

export default MovieList;
