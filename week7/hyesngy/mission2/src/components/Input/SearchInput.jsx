import React, { useCallback } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

const SearchInput = ({ searchValue, onSearch }) => {
  const handleSearchMovie = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 1000),
    [onSearch]
  );

  const onChangeSearchValue = (event) => {
    const value = event.target.value;
    console.log("🚀 ~ onChangeSearchValue ~ value:", value)
    handleSearchMovie(value);
  };

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  }

  return (
    <SearchDiv>
      <InputSearch
        placeholder='검색할 영화 제목을 입력하세요!'
        value={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={handleSearchMovieWithKeyboard}
      />
      <BtnSearch onClick={() => handleSearchMovie(searchValue)}>검색</BtnSearch>
    </SearchDiv>
  );
};

export default SearchInput;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0;
`
const InputSearch = styled.input`
  width: 50vw;
  height: 2.5rem;
  border-radius: 4px 0 0 4px;
  border: none;
  padding: 0.5rem;
`
const BtnSearch = styled.button`
  width: 5rem;
  height: 2.5rem;
  border-radius: 0 4px 4px 0;
  background: #F82F62;
  color: white;
  border: none;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  cursor: pointer;
  
  &:hover {
    background: #e52958;
  }
`