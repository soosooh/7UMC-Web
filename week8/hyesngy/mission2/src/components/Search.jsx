import React, { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';

const Search = ({ setTodos, originalTodos = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setTodos(originalTodos);
      setNoResults(false);
    } else {
      debouncedSearch(query);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() === "") {
      setTodos(originalTodos);
      setNoResults(false);
    } else {
      debouncedSearch(searchQuery);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      const filteredTodos = originalTodos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      );
      setTodos(filteredTodos);
      setNoResults(filteredTodos.length === 0);
    }, 300),
    [originalTodos, setTodos]
  );

  return (
    <>
      <SearchDiv>
        <SearchInput
          placeholder="제목으로 검색해보세요!"
          value={searchQuery}
          onChange={handleChange}
        />
        <SearchButton onClick={handleSearchClick}>검색</SearchButton>
      </SearchDiv>
      {noResults && <NoResultsMessage>검색 결과가 없습니다.</NoResultsMessage>}
    </>
  );
};

export default Search;

const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 2rem;
`
const SearchButton = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background: dodgerblue;
  color: white;
  display : flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: darknavy;
  }
`
const SearchInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    border: 1px solid lightblue;
  }
`
const NoResultsMessage = styled.p`
  font-size: 1rem;
  color: red;
  text-align: center;
`