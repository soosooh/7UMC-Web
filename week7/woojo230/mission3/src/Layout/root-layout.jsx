import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column; /* 모바일에서 세로 배치 */
  overflow-x: hidden;
`;

const RootLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Sidebar></Sidebar>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Container>
    </>
  );
};

export default RootLayout;
