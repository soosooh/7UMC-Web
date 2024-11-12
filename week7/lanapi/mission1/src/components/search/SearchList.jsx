// SearchList.jsx
import React from 'react';
import MovieCard from '../movies/MovieCard';
import SkeletonCard from './SkeletonCard';
import styled from 'styled-components';

const SearchList = ({ data, isLoading }) => {
    return (
        <ResultsContainer>
            {isLoading ? (
                [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
            ) : (
                data?.results?.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        overview={movie.overview}
                    />
                ))
            )}
        </ResultsContainer>
    );
};

export default SearchList;

const ResultsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 170.65px);
    grid-auto-rows: 260px;
    gap: 14px 46.54px;
    justify-content: start;
    padding: 20px;
`;
