// src/components/SearchInput.jsx
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
`;

const SearchInputBox = styled.input`
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #4a4a4a;
    border-radius: 8px 0 0 8px;
    font-size: 16px;
    color: #333;
    outline: none;

    &:focus {
        border-color: #005cbf;
    }
`;

const SearchButton = styled.button`
    background-color: #005cbf;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 0 8px 8px 0;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #004494;
    }
`;

const SearchInput = ({ value, onChange, onSubmit }) => {
    return (
        <InputContainer>
            <SearchInputBox
                type="text"
                placeholder="Search for movies..."
                value={value}
                onChange={onChange}
            />
            <SearchButton onClick={onSubmit}>Search</SearchButton>
        </InputContainer>
    );
};

export default SearchInput;
