import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  const authPaths = ['/login', '/signup']; // 인증 페이지 경로
  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <>
      <GlobalStyle />
      {isAuthPage ? (
        <Outlet />
      ) : (
        <RootContainer>
          <Navbar />
          <MainContainer>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <Content>
              <Outlet />
            </Content>
          </MainContainer>
        </RootContainer>
      )}
    </>
  );
};

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow: hidden;
  }

  #root {
    height: 100%;
  }
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: black;
`;

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #413f3f;
  padding: 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: black;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export default Layout;
