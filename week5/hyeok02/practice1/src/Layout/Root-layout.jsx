import { Outlet } from "react-router-dom";
import styled from 'styled-components';
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