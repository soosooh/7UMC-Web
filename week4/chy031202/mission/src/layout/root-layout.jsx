import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Sidbar from "../components/sidebar.jsx";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <LayoutContainer>
            <Navbar/>
            
                <Sidbar/>
                <OutletContent>
                <Outlet/>
                </OutletContent>
                
            
            
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh; 
    flex-direction: row; /* 슬라이드 바와 콘텐츠가 좌우로 배치 */
`


    
const OutletContent = styled.div `
    flex: 1;  // 남은 공간을 Outlet이 차지
    margin-right:0;
    margin-bottom:0;
    margin-left: 180px;
    margin-top : 40px;
    padding-left: 20px;
    padding-top:20px;
    width: calc(100% - 180px); /* 슬라이드 바 너비만큼 감소 */
    
    background-color: #000000;  
    color: white;
    overflow: hidden;
    
`
export default RootLayout;

