import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Sidbar from "../components/sidebar.jsx";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <LayoutContainer>
            <Navbar/>
            <MainContent>
                <Sidbar/>
                <Outlet/>
            </MainContent>
            
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div `
    display: flex;
    flex-direction: colum;
    height: 100vh; 
`

const MainContent = styled.div`
    display: flex;
    flex: 1;  // 남은 공간을 차지
    `
export default RootLayout;

