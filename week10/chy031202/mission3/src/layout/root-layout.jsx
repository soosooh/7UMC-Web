import {Outlet} from "react-router-dom";
import Navbar from "../components/navbars/navbar.jsx";
import NavbarLog from "../components/navbars/navbarLog.jsx";
import Sidbar from "../components/sidebar.jsx";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/LoginContext.jsx";
const SIDEBAR_WIDTH = '180px';
import { useMediaQuery } from 'react-responsive';

const RootLayout = () => {
    const { isLoggedIn, nickname, logout } = useAuth();
    //const [nickname, setNickname] = useState('');

    // const {data: userData, isLoading, isError} = useQuery({
    //     queryKey: ['userInfo'],
    //     queryFn: async () => {
    //         const response = await fetch('http://localhost:3000/user/me', {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    //             },
    //         });
    //         if (!response.ok) throw new Error("유저 정보를 불러올 수 없습니다.");
    //         return response.json();
    //     },
    //     enabled: isLoggedIn, 
    //     retry: false, 
    // })

    // useEffect(() => {
    //      // 로그인 상태가 변경될 때 로컬 스토리지에서 닉네임을 읽어옴
    //      if (isLoggedIn) {
    //         const storedNickname = localStorage.getItem("nickname");
    //         if (storedNickname) {
    //             setNickname(storedNickname);
    //         }
    //     } else {
    //         setNickname(""); // 로그아웃 시 닉네임 초기화
    //     }
    // }, [isLoggedIn]); // isLoggedIn 변경 시 실행

    const isMobile = useMediaQuery({ maxWidth: 500 });

    return (
        <LayoutContainer>
            {isLoggedIn ? <NavbarLog nickname={nickname} /> : <Navbar />} 
            
            <UnderWrapp>
                {!isMobile && <Sidbar />}

                <OutletContent sidebarWidth={SIDEBAR_WIDTH}>
                    <Outlet/>
                </OutletContent>
            </UnderWrapp>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #000000;  
    height: 100vh;

`
const UnderWrapp = styled.div `
display:flex;
gap:10px;
height: 100%;

`

    
const OutletContent = styled.div `
    flex-grow: 1;

    padding-top:20px;

    // @media (max-width: 760px) {
    // width: 100%;
    // }
    overflow-y:auto;

    color: white;
    
`
export default RootLayout;

