import React, { useCallback } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Input from "../../Input/Input";
import { debounce } from "lodash";

const TitleContainer = styled.div`
    width: 5vw;
    height: 2vw;
    background-color: ${colors.buttonColor2};
    border: none;
    border-radius: 2.5vw;
    font-size: 1.2vw;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 0.35vw;
`;

const Search = ({ search, setSearch, onSearch }) => {
    const debouncedSearch = useCallback(
        debounce((value) => {
            onSearch(value);
        }, 1000),
        []
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        debouncedSearch(value);
    };

    return (
        <>
            <TitleContainer>검색</TitleContainer>
            <Input placeholder="제목으로 검색해보세요." value={search} onChange={handleChange} />
        </>
    );
};

export default Search;
