import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MovieList from '../components/Movies/MovieList';
import SearchInput from '../components/Input/SearchInput';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const searchUrl = `/search/movie?query=${searchValue}&include_adult=false&language=ko-KR`;

  const handleSearch = (value) => {
    if (searchValue !== value) {
      setSearchValue(value);
      navigate(`/search?mq=${value}`);
    }
  };

  return (
    <PageContainer>
      <SearchInput
        value={searchValue}
        onSearch={handleSearch}
      />
      <MovieList listType="search" url={searchUrl} />
    </PageContainer>
  );
};

export default SearchPage;