import { useState, useCallback } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import debounce from "lodash.debounce";

const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    height: 2vw;
    margin-bottom: 1rem;
`;

const SearchInputBox = styled.input`
    width: 94%;
    background-color: ${colors.white};
    border: none;
    border-radius: 0.5vw 0 0 0.5vw;
    font-size: 0.7vw;
    color: ${colors.navBackground};
    font-weight: bold;
    padding: 0 1vw;
    box-sizing: border-box;
`;

const SearchButton = styled.div`
    width: 6%;
    background-color: ${colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 0.5vw 0.5vw 0;
    font-size: 0.8vw;
    font-weight: bold;
    cursor: pointer;
`;

const SearchInput = ({ setQuery, setLoading }) => {
    const [input, setInput] = useState('');

    const debouncedSearch = useCallback(
        debounce((nextValue) => {
            setQuery(nextValue);
            setLoading(true);
        }, 1000),
        []
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        debouncedSearch(value);
    };

    const handleSearch = () => {
        if (input.trim()) {
            setQuery(input);
            setLoading(true);
        }
    };

    return (
        <SearchContainer>
            <SearchInputBox
                value={input}
                onChange={handleChange}
                placeholder="영화 제목을 입력해주세요."
            />
            <SearchButton onClick={handleSearch}>검색</SearchButton>
        </SearchContainer>
    );
};

export default SearchInput;