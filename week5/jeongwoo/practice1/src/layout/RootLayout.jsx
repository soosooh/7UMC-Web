// RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #141414;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px;  // 20px에서 40px로 증가
  margin-left: 240px;  // 200px에서 240px로 증가하여 사이드바와의 간격 확보
  color: white;
`;

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const SideBarWrapper = styled.div`
  position: fixed;
  top: 61px;
  left: 0;
  bottom: 0;
  width: 200px;
`;

const RootLayout = () => {
  return (
    <LayoutContainer>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <ContentWrapper>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default RootLayout;