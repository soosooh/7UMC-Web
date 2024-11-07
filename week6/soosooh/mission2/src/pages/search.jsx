import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { axiosInstance } from "../apis/axios-instance";
import MovieCard from "../components/movie/movie-card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;
const SearchButton = styled.button`
  background-color: #ff073d;
  width: 90px;
  border-radius: 0 10px 10px 0;
`;
const CardContainer = styled.div`
  display: flex;
  margin: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const NoResultsMessage = styled.div`
  margin: 30px;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
const pulse = keyframes`
  0% {
    background-color: #444;
  }
  50% {
    background-color: #555;
  }
  100% {
    background-color: #444;
  }
`;

const SkeletonCard = styled.div`
  width: 195px;
  height: 329px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const SkeletonPoster = styled.div`
  width: 100%;
  height: 280px;
  background-color: #555;
  border-radius: 10px 10px 0 0;
  margin-bottom: 5px;
  animation: pulse 1.5s infinite ease-in-out;
`;

const SkeletonTitle = styled.div`
  width: 195px;
  height: 15px;
  background-color: #666;
  margin: 5px 0;
  border-radius: 5px;
  animation: pulse 1.5s infinite ease-in-out;
`;

const SkeletonDate = styled.div`
  width: 195px;
  height: 12px;
  background-color: #666;
  margin-bottom: 5px;
  border-radius: 5px;
  animation: pulse 1.5s infinite ease-in-out;
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
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCard key={index}>
              <SkeletonPoster />
              <SkeletonTitle />
              <SkeletonDate />
            </SkeletonCard>
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
