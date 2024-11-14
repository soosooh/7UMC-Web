import { useState } from "react";
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
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const RootLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <MainContainer>
                <Sidebar $isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <Outlet />
            </MainContainer>
        </>
    );
};

export default RootLayout;
