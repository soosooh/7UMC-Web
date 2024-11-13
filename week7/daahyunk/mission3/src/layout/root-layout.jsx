import { Outlet } from "react-router-dom";
import Navbar from "../components/common/NavBar";
import Sidebar from "../components/common/SideBar"; 
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  box-sizing: border-box;  
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  margin-left: 11rem;
  padding-top: 4rem;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-left: 0; 
    padding-top: 3rem; 
  }
`;


const RootLayout = () => {
  return (
    <>
      <Navbar />  
      <MainContainer>
        <Sidebar />
        <ContentContainer>
          <Outlet /> 
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default RootLayout;

