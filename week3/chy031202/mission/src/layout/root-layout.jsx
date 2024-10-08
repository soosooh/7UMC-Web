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
                <OutletContent>
                    <Outlet/>
                </OutletContent>
                
            </MainContent>
            
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh; 
`

const MainContent = styled.div`
    display: flex;
    flex: 1;  
    `
    
const OutletContent = styled.div `
    flex: 1;  // 남은 공간을 Outlet이 차지
    margin-left: 180px;
    margin-top : 40px;
    padding: 20px;
    width:100%;
    background-color: #000000;  // 배경색 예시
    color: white;
    
`
export default RootLayout;

