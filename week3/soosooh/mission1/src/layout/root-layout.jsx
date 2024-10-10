import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <RootContainer>
        <Sidebar />
        <Outlet />
      </RootContainer>
    </>
  );
};

export default RootLayout;
