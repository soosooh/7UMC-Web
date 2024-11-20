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
        gap: 15px; // 태블릿 화면에서 간격 줄이기
    }

    @media (max-width: 768px) {
        gap: 10px; // 모바일 화면에서 간격 더 줄이기
        padding: 15px; // 모바일에서는 여백을 줄여줌
    }

    @media (max-width: 480px) {
        gap: 5px; // 더 작은 화면에서는 간격 최소화
        padding: 10px; // 더 작은 화면에서는 여백을 더 줄임
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

