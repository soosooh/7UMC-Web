import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const LayoutContainer = styled.div`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 background-color: #141414;
 overflow-x: hidden;
`;

const ContentWrapper = styled.div`
 flex: 1;
 display: flex;
 position: relative;
`;

const MainContent = styled.main`
 flex: 1;
 padding: 15px;
 width: 100%;
 margin-top: 56px;
 min-height: calc(100vh - 56px);
 margin-left: 0;
 transition: margin-left 0.3s ease;

 @media (min-width: 768px) {
   margin-left: 200px;
   padding: 40px;
 }

 ${props => props.isSidebarOpen && `
   @media (max-width: 767px) {
     margin-left: 240px;
   }
 `}
`;

const NavWrapper = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 100;
 background-color: #141414;
 height: 56px;
`;

const SideBarWrapper = styled.div`
 position: fixed;
 top: 56px;
 left: ${props => props.isOpen ? '0' : '-220px'};
 bottom: 0;
 width: 240px;
 z-index: 99;
 background-color: #141414;
 transition: left 0.3s ease;
 box-shadow: ${props => props.isOpen ? '2px 0 5px rgba(0,0,0,0.2)' : 'none'};

 @media (min-width: 768px) {
   width: 200px;
   left: 0;
   box-shadow: 2px 0 5px rgba(0,0,0,0.2);
 }
`;

const MobileMenuButton = styled.button`
 position: fixed;
 bottom: 15px;
 right: 15px;
 width: 45px;
 height: 45px;
 border-radius: 50%;
 background-color: #f84c62;
 color: white;
 border: none;
 font-size: 20px;
 cursor: pointer;
 z-index: 101;
 display: flex;
 align-items: center;
 justify-content: center;
 box-shadow: 0 2px 5px rgba(0,0,0,0.3);

 @media (min-width: 768px) {
   display: none;
 }
`;

const RootLayout = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 return (
   <LayoutContainer>
     <NavWrapper>
       <Navbar />
     </NavWrapper>
     <ContentWrapper>
       <SideBarWrapper isOpen={isSidebarOpen}>
         <SideBar />
       </SideBarWrapper>
       <MainContent isSidebarOpen={isSidebarOpen}>
         <Outlet />
       </MainContent>
       <MobileMenuButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
         {isSidebarOpen ? '×' : '☰'}
       </MobileMenuButton>
     </ContentWrapper>
   </LayoutContainer>
 );
};

export default RootLayout;