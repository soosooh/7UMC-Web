import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  display: flex;
`;

const RootLayout = ({ userEmail, setUserEmail }) => {
    return (
        <>
            <Navbar userEmail={userEmail} setUserEmail={setUserEmail} /> {/* userEmail과 setUserEmail을 Navbar에 전달 */}
            <Container>
                <Sidebar />
                <Outlet />
            </Container>
        </>
    );
};

export default RootLayout;
