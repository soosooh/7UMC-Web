import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";
import SidebarToggle from "../components/sidebar-toggle";

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const OutletContainer = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 100vw;
  }
`;

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <RootContainer>
        <SidebarToggle />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </RootContainer>
    </>
  );
};

export default RootLayout;
