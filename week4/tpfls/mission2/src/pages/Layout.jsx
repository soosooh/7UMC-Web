import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
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
  );
};

// Styled Components 정의
const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #413F3F; /* 배경 어둡게 */
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #121212; /* 메인 컨텐츠 배경색 */
`;

const SidebarContainer = styled.div`
  width: 200px; /* 사이드바 너비 */
  background-color: #413F3F; /* 더 어두운 색상 */
  padding: 20px 0; /* 패딩 */
`;

const Content = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  padding: 20px;
  overflow-y: auto; /* 스크롤 가능 */
  background-color: #413F3F; /* 배경색을 사이드바와 다르게 설정 */
`;

export default Layout;
