import React, { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';
import styled from 'styled-components';
import MovieCard from '../../components/MovieCard';
import useMovies from '../../hooks/useMovies';
import { searchMovies } from '../../api/movieApi';

// 검색 컨테이너
const SearchContainer = styled.div`
  padding: 20px;
  color: white;
  min-height: 100vh;
`;

// 검색 입력 영역
const SearchInputWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border: 2px solid #f84c62;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #8b8eff;
  }
`;

const SearchButton = styled.button`
  padding: 12px 24px;
  background-color: #f84c62;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6B78FF;
  }
`;

// 영화 목록 그리드
const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px 0;
  position: relative;
`;

// 결과 없음 메시지
const NoResults = styled.div`
  position: absolute;
  left: 57%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  width: 100%;
`;

// 스켈레톤 UI 컴포넌트
const SkeletonCard = styled.div`
  height: 300px;
  background: linear-gradient(
    90deg,
    rgba(26, 26, 26, 0.8) 25%,
    rgba(42, 42, 42, 0.8) 50%,
    rgba(26, 26, 26, 0.8) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

// 에러 메시지 컴포넌트
const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  padding: 20px;
  width: 100%;
`;

const LoadingGrid = () => {
  return (
    <MoviesGrid>
      {[...Array(12)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </MoviesGrid>
  );
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const [inputValue, setInputValue] = useState(searchQuery);

  const searchMoviesCallback = useCallback((params) => {
    return searchMovies(params);
  }, []);

  const { data: movies, loading, error } = useMovies(
    searchMoviesCallback,
    searchQuery ? { query: searchQuery } : null
  );

  // 버튼 클릭 시 검색
  const handleSearch = () => {
    if (inputValue) {
      setSearchParams({ query: inputValue });
    } else {
      setSearchParams({});
    }
    document.activeElement.blur();
  };

  // 디바운스된 자동 검색
  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value) {
        setSearchParams({ query: value });
      } else {
        setSearchParams({});
      }
    }, 500),
    [setSearchParams]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);  // 입력 시 자동 검색
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const renderContent = () => {
    if (loading) {
      return <LoadingGrid />;
    }

    if (error) {
      return <ErrorMessage>검색 중 오류가 발생했습니다. 다시 시도해 주세요.</ErrorMessage>;
    }

    if (searchQuery && movies?.length === 0) {
      return (
        <NoResults>
          해당하는 검색어 '{searchQuery}'에 해당하는 데이터가 없습니다.
        </NoResults>
      );
    }

    if (movies?.length > 0) {
      return (
        <MoviesGrid>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MoviesGrid>
      );
    }

    return null;
  };

  return (
    <SearchContainer>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          placeholder="영화 제목을 입력하세요"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={handleSearch}>
          검색
        </SearchButton>
      </SearchInputWrapper>

      {renderContent()}
    </SearchContainer>
  );
};

export default Search;