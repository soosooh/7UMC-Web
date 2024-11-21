import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

const SearchBanner = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useCallback(
        debounce((query) => {
            onSearch(query);
        }, 500),
        [onSearch]
    );

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setSearchTerm(newQuery);
        debouncedSearch(newQuery);
    };

    const initiateSearch = () => {
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };

    return (
        <Container>
            <SearchInputBox
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="검색할 영화 제목을 입력하세요"
            />
            <SearchButton onClick={initiateSearch}>검색</SearchButton>
        </Container>
    );
};

export default SearchBanner;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; // 중앙 정렬
    margin: 0 auto; // 가운데 정렬
    width: 100%;
    max-width: 800px; // 최대 너비 설정
    padding: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const SearchInputBox = styled.input`
    flex: 1;
    background-color: #ffffff;
    border: none;
    border-radius: 10px 0 0 10px;
    font-size: 16px;
    padding: 12px;
    box-sizing: border-box;
    font-weight: bold;
    color: #333;

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        border-radius: 10px;
        margin-bottom: 10px;
    }
`;

const SearchButton = styled.button`
    padding: 12px 20px;
    background-color: #ff5a5f;
    color: #ffffff;
    border: none;
    border-radius: 0 10px 10px 0;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    flex-shrink: 0;

    &:hover {
        background-color: #e0474f;
    }

    @media (max-width: 768px) {
        border-radius: 10px;
    }
`;

