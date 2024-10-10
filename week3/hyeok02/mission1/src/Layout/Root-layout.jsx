import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  display: flex;
`

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <Outlet />
            </Container>
        </>
    );
};

export default RootLayout;