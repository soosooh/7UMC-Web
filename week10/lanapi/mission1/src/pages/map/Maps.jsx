import React from 'react';
import MapsItem from '../../components/map/MapsItem'; // 상대 경로로 수정
import styled from 'styled-components';

const MapPage = () => {
  return (
    <>
      <PageTitle>지도 페이지</PageTitle>
      <PageText>현재 위치에서 5km 반경 내에 있는 영화관입니다.</PageText>
      <MapsItem />
    </>
  );
};

const PageTitle = styled.h2`
  color: white;
  text-align: center;
  margin: 0;
  font-size: 24px; 
`;

const PageText = styled.h2`
  color: white;
  text-align: center;
  padding: 20px;
  margin: 0;
  font-size: 18px; 
`;


export default MapPage;