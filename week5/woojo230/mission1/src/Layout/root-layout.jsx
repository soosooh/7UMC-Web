import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  padding-left: 20px;
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
