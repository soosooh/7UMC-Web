import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";

const OutletContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RootLayout = () => {
    return (
        <>
            <Header />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </>
    );
};

export default RootLayout;