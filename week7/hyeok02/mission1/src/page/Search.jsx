import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from '../components/List';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 85%;
    max-width: 90%;
    height: 50px;
    margin: 20px auto 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    z-index: 10;
`;

const SearchInput = styled.input`
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 15px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    transition: box-shadow 0.3s ease;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const SearchButton = styled.button`
    height: 100%;
    width: 7%;
    min-width: 80px;
    border: none;
    background-color: #e52958;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const ResultsContainer = styled.div`
    width: 85%;
    max-width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 100px;
    left: 200px;
`;

const NoResultsMessage = styled.div`
    margin-top: 65px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const fetchResults = async () => {
        if (query.trim()) {
            setLoading(true); 
            try {
                const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                    params: { query },
                });
                setResults(response.data.results);
                setNoResults(response.data.results.length === 0);
            } catch (error) {
                console.error('검색 중 오류 발생:', error);
            } finally {
                setLoading(false); 
            }
        }
    };

    const handleSearch = useCallback(debounce(fetchResults, 2000), [query]);

    useEffect(() => {
        if (query) {
            handleSearch();
        }
    }, [query, handleSearch]);

    const handleChange = (e) => setQuery(e.target.value);

    return (
        <>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="영화 제목을 입력해주세요."
                    value={query}
                    onChange={handleChange}
                />
                <SearchButton onClick={fetchResults}>검색</SearchButton>
            </SearchContainer>

            <ResultsContainer>
                <List movies={results} showNoResults={false} loading={loading} />
                {noResults && (
                    <NoResultsMessage>
                        {`해당하는 검색어 "${query}"에 해당하는 데이터가 없습니다.`}
                    </NoResultsMessage>
                )}
            </ResultsContainer>
        </>
    );
};

export default Search;
