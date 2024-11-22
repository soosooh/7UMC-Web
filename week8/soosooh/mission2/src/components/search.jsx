import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchButton = styled.button`
  background-color: #c0c3d8;
  color: black;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 80px;
    height: 30px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 50px;
    heigth: 20px;
    font-size: 10px;
  }
`;

const SearchInput = styled.input`
  width: 600px;
  height: 60px;
  background-color: white;
  color: black;
  border: gray;

  @media (max-width: 768px) {
    width: 400px;
    height: 40px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 30px;
    font-size: 10px;
  }
`;

const Search = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = () => {
    // 검색어를 부모 컴포넌트로 전달
    onSearch(searchTitle);
  };

  return (
    <Container>
      <SearchButton onClick={handleSearch}>검색</SearchButton>
      <SearchInput
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        placeholder="제목으로 검색해보세요."
      ></SearchInput>
    </Container>
  );
};

export default Search;
