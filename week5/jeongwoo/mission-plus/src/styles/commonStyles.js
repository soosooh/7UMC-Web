import styled from 'styled-components';

// 공통으로 사용되는 Container
export const Container = styled.div`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// 공통으로 사용되는 Title
export const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 10px 0;  // 여백 최소화
`;

// 공통으로 사용되는 Grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;  
  padding: 10px;
  margin: 0 auto;
  max-width: 2000px;
`;
