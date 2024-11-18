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
  flex-direction: column;
  margin-top: 56px; // Navbar 높이만큼 여백

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 15px;
  width: 100%;

  @media (min-width: 768px) {
    margin-left: 200px;
    padding: 40px;
  }
`;

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 768px) {
    position: sticky;
  }
`;

const SideBarWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: fixed;
    top: 61px;
    left: 0;
    bottom: 0;
    width: 200px;
  }
`;

const MobileNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1a1a1a;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.2);

  @media (min-width: 768px) {
    display: none;
  }
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
        <MobileNavBar>
          {/* 모바일 네비게이션 아이템들 */}
        </MobileNavBar>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default RootLayout;