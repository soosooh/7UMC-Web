import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <RootContainer>
        <Navbar />
        <MainContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <Content>
            <Outlet /> {/* 자식 라우트가 이곳에 렌더링됩니다 */}
          </Content>
        </MainContainer>
      </RootContainer>
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
    overflow: hidden; /* 스크롤 방지 */
  }
`;

// Styled Components 정의
const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black; /* 기본 배경색을 검은색으로 설정 */
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: black; /* 메인 컨텐츠 배경색을 검은색으로 설정 */
`;

const SidebarContainer = styled.div`
  width: 200px; /* 사이드바 너비 */
  background-color: #413F3F; /* 더 어두운 색상 */
  padding: 20px 0; /* 패딩 */
`;

const Content = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  padding: 20px;
  overflow: hidden; /* 스크롤 방지 */
  background-color: black; /* 배경색을 검은색으로 설정 */
`;

export default Layout;
