import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
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
