
// MovieSearch.jsx
import React, { useState } from 'react';
import useFetch from '../../hooks/UseFetch';
import SearchBanner from '../../components/search/SearchBanner';
import MovieCard from '../../components/movies/MovieCard';
import SkeletonCard from '../../components/search/SkeletonCard';
import styled from 'styled-components';
const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzEyOWZhOWFjYWM2OGVkYWVjOWVmMGNlNzQ5YTc3MiIsIm5iZiI6MTczMDkwNTg2NS40NzUwMjE4LCJzdWIiOiI2NzA2ODM4MmE4ODYxNGQ2YjA4YWY1MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._3AS3CHlvEEV5zqSvRICnrlqX42z2tgjt3I6QHbkvWY';
const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [searchUrl, setSearchUrl] = useState('');

    const { data, isLoading, isError } = useFetch(searchUrl, token);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setSearchUrl(`search/movie?query=${searchQuery}&language=ko-KR`);
    };

    return (
        <div>
            <SearchBanner onSearch={handleSearch} placeholder="영화를 검색하세요" />

            {isError && <p>영화 검색 중 오류가 발생했습니다.</p>}

            {isLoading ? (
                <ResultsContainer>
                    {[...Array(8)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </ResultsContainer>
            ) : (
                <ResultsContainer>
                    {data?.results?.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movieId={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            overview={movie.overview}
                        />
                    ))}
                </ResultsContainer>
            )}
        </div>
    );
};

export default MovieSearch;

const ResultsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 170.65px);
    grid-auto-rows: 260px;
    gap: 14px 46.54px;
    justify-content: start;
    padding: 20px;
`;
