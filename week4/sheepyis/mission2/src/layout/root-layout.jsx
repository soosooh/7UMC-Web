import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import SideBar from "../components/sideBar/sideBar";
import styled from "styled-components";

const RootContainer = styled.div`
    display: flex;
`

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <RootContainer>
                <SideBar />
                <Outlet />
            </RootContainer>
        </>
    );
};

export default RootLayout;