import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const OutletContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <RootContainer>
        <Sidebar />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </RootContainer>
    </>
  );
};

export default RootLayout;
