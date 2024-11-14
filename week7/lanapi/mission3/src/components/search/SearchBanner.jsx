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
    position: absolute;
    width: 1692px;
    height: 50px;
    top: 96px;
    left: 203px;
    display: flex;
    border-radius: 10px 0px 0px 0px;
`;

const SearchInputBox = styled.input`
    width: 94%;
    background-color: #ffffff;
    border: none;
    border-radius: 10px 0 0 10px;
    font-size: 16px;
    padding: 12px;
    box-sizing: border-box;
    font-weight: bold;
    color: #333;
`;

const SearchButton = styled.button`
    width: 6%;
    background-color: #ff5a5f;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 10px 10px 0;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e0474f;
    }
`;

