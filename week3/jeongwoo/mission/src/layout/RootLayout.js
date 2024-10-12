import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #141414; // 여기서 배경색을 변경하세요
  color: white; // 텍스트 색상도 함께 조정하세요
`;

const RootLayout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        <SideBar />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainContent>
    </LayoutContainer>
  );
};

export default RootLayout;