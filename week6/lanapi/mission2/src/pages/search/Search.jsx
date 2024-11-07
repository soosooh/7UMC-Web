// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../../components/search/SearchInput';
import MovieList from '../../components/movies/MovieList';

const SearchContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
`;

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    const handleSearch = (inputValue) => {
        if (inputValue.trim()) {
            setSearchParams({ query: inputValue });
        }
    };

    return (
        <SearchContainer>
            <h2>Movie Search</h2>
            <SearchInput setQuery={handleSearch} />

            {query && (
                <MovieList url={`/search/movie?query=${query}&include_adult=false&page=1`} />
            )}
        </SearchContainer>
    );
};

export default SearchPage;
