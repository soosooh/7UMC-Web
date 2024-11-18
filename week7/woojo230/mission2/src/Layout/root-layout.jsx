import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh; /* 전체 화면 높이를 사용 */
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  padding-left: 20px;
  overflow-y: auto;
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
