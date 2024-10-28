import React from 'react';
import styled from 'styled-components';

const SearchPage = () => {
  return (
    <SearchContainer>
      <h1>검색 페이지 야호~!</h1>
    </SearchContainer>
  );
};

// SearchPage 스타일링
const SearchContainer = styled.div`
  background-color: black; /* 배경색을 검은색으로 */
  color: white; /* 글씨를 흰색으로 */
  width: 100vw; /* 페이지의 가로를 화면 전체로 */
  height: 100vh; /* 페이지의 세로를 화면 전체로 */
  display: flex;
  padding: 50px 0 50px 20px; /* 상하 50px, 왼쪽 20px */
  align-items: flex-start; /* 수직 방향으로 상단에 정렬 */
  font-family: 'Inter', sans-serif; /* Inter 폰트 적용 */
`;

export default SearchPage;
