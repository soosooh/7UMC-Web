import styled from 'styled-components';

// 공통으로 사용되는 Container
export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// 공통으로 사용되는 Title
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

// 공통으로 사용되는 Grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;