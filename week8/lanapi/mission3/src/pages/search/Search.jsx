// MovieSearch.jsx
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import SearchBanner from '../../components/search/SearchBanner';
import SearchList from '../../components/search/SearchList';  // SearchList 컴포넌트 위치

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [searchUrl, setSearchUrl] = useState('');
    const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;  // .env에서 토큰 가져오기

    const { data, isLoading, isError } = useFetch(searchUrl, token);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setSearchUrl(`search/movie?query=${searchQuery}&language=ko-KR`);
    };

    return (
        <div>
            <SearchBanner onSearch={handleSearch} placeholder="영화를 검색하세요" />

            <SearchList data={data} isLoading={isLoading} />
        </div>
    );
};

export default MovieSearch;

