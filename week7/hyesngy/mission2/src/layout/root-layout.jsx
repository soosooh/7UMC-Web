import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 60px;
  margin-left: 180px;
  height: calc(100vh - 60px);
`

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <MainContainer>
                <Sidebar />
                <Outlet />
            </MainContainer>
        </>
    );
};

export default RootLayout;
