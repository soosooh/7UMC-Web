// SearchPage.js
import { useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { debounce } from "lodash"; // lodash에서 debounce 함수 가져오기
import SearchMovieList from "../components/search/search-movie-list";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchBarContainer = styled.div`
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: center;
  gap: 5px;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff4d4d;
  color: white;
  padding: 10px 20px;
  min-width: 80px; /* 최소 너비 설정 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    min-width: 60px; /* 모바일에서 최소 너비 설정 */
  }
`;

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });
  const mq = searchParams.get("mq");
  const navigate = useNavigate();

  // debounce 적용된 검색 핸들러
  const debounceSearch = useCallback(
    debounce((value) => {
      if (mq !== value) {
        navigate(`/search?mq=${value}`);
      }
    }, 500),
    [mq, navigate]
  );

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
    debounceSearch(event.target.value);
  };

  const handleSearchMovie = () => {
    if (mq !== searchValue) {
      navigate(`/search?mq=${searchValue}`);
    }
  };

  const handleSearchMovieWithKeybord = (e) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  return (
    <Container>
      <SearchBarContainer>
        <Input placeholder="영화 제목을 입력해 주세요" value={searchValue} onChange={onChangeSearchValue} onKeyPress={handleSearchMovieWithKeybord} />
        <Button onClick={handleSearchMovie}>검색</Button>
      </SearchBarContainer>
      <SearchMovieList />
    </Container>
  );
};

export default SearchPage;
