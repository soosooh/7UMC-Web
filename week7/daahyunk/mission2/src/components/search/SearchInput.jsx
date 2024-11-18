import styled from "styled-components";
import PropTypes from "prop-types";

const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`;

const SearchInputField = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 1rem 2rem;
  width: 7rem;
  font-size: 1rem;
  background-color: #ff4973;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  
  &:hover {
    background-color: #d02148;
  }
`;

const SearchInput = ({ query, setQuery, onSearch }) => (
  <SearchBarContainer>
    <SearchInputField
      type="text"
      placeholder="영화 제목을 입력해주세요..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <SearchButton onClick={onSearch}>검색</SearchButton>
  </SearchBarContainer>
);

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
