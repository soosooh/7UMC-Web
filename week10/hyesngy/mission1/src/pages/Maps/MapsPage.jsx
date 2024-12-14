import React from 'react';
import styled from 'styled-components';
import TheaterMap from '../../components/Maps/TheaterMap';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;

  h1 {
    display: inline;
    white-space: nowrap;
    text-align: center;
  }
`

const mapsPage = () => {
  return (
    <PageContainer>
      <h1>주변 영화관</h1>
      <TheaterMap />
    </PageContainer>
  );
};

export default mapsPage;