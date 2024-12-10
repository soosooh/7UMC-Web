import React from 'react';
import MapsItem from '../../components/map/MapsItem'; // 상대 경로로 수정
import styled from 'styled-components';

const MapPage = () => {
  return (
    <>
      <PageTitle>지도 페이지</PageTitle>
      <MapsItem />
    </>
  );
};

const PageTitle = styled.h2`
  color: white;
  text-align: center;
  padding: 20px;
  margin: 0;
`;

export default MapPage;