import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: calc(100vh - 60px); // 모바일 사이드바 높이 고려

  @media (min-width: 768px) {
    height: 100vh;
    padding: 20px;
  }
`;

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Container>
    </>
  );
};

export default RootLayout;
