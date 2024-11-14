import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { axiosInstance } from "../apis/axios-instance";
import MovieCard from "../components/movie/movie-card";
import SkeletonCard from "../components/skeleton/skeleton-card";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  height: 50px;
  margin: 30px;
`;
const StyledInput = styled.input`
  width: 1100px;
  background-color: white;
  border: white;
  border-radius: 10px 0 0 10px;
  color: black;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const SearchButton = styled.button`
  background-color: #ff073d;
  width: 90px;
  border-radius: 0 10px 10px 0;

  @media screen and (max-width: 768px) {
    width: 20%;
    font-size: 12px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  margin: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 10px 0;
  }
`;
const NoResultsMessage = styled.div`
  margin: 30px;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

// debounce 함수를 정의
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/search/movie`, {
        params: { query, language: "ko-KR" },
      });
      setResults(response.data.results);
      setIsSearched(true);
    } catch (error) {
      console.error("검색 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  // handleSearch에 debounce 적용
  const debouncedSearch = debounce(handleSearch, 300);
  useEffect(() => {
    if (query.trim()) {
      debouncedSearch(query);
    }
  }, [query]);

  return (
    <Container>
      <SearchContainer>
        <StyledInput
          type="search"
          placeholder={"영화 제목을 입력해주세요! "}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton onClick={() => handleSearch(query)}>검색</SearchButton>
      </SearchContainer>
      {loading ? (
        <CardContainer>
          {Array.from({ length: 50 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </CardContainer>
      ) : results.length > 0 ? (
        <CardContainer>
          {results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />
          ))}
        </CardContainer>
      ) : (
        isSearched && (
          <NoResultsMessage>
            해당하는 검색어 "{query}"에 해당하는 데이터가 없습니다.
          </NoResultsMessage>
        )
      )}
    </Container>
  );
};

export default Search;
