// MovieList.jsx
import React from 'react';
import styled from 'styled-components';
import MovieItem from '../Item/MovieItem';
import { useQuery } from '@tanstack/react-query'; // useQuery import 추가
import { fetchPopularMovies } from '../../api/movie'; // 필요한 API 함수 import

const MovieList = ({ title, queryKey, fetchFunction }) => {
    const { data: movies, isLoading, isError } = useQuery(queryKey, fetchFunction); // useQuery 사용

    if (isLoading) return <LoadingMessage>로딩 중...</LoadingMessage>;
    if (isError) return <ErrorMessage>영화 정보를 불러오는 데 문제가 발생했습니다.</ErrorMessage>;

    return (
        <Container>
            <Title>{title}</Title>
            <MovieGrid>
                {movies.results.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
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
