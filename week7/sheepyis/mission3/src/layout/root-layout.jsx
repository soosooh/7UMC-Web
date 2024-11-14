import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import SideBar from "../components/sideBar/sideBar";
import styled from "styled-components";

const RootContainer = styled.div`
    width: 100%;
    display: flex;
`

const RootLayout = ({ nickname, setNickname }) => {
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