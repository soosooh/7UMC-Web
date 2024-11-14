import {Outlet} from "react-router-dom";
import Navbar from "../components/navbars/navbar.jsx";
import NavbarLog from "../components/navbars/navbarLog.jsx";
import Sidbar from "../components/sidebar.jsx";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/LoginContext.jsx";
import { useQuery } from "@tanstack/react-query";
const SIDEBAR_WIDTH = '180px';


const RootLayout = () => {
    const { isLoggedIn, logout } = useAuth();
    const [nickname, setNickname] = useState('');

    const fetchUserInfo = async () => {
        try {
            const response = await fetch('http://localhost:3000/user/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                const emailPrefix = data.email.split('@')[0]; // 이메일의 @ 앞부분
                setNickname(emailPrefix);
            } else {
                console.error("유저 정보를 불러올 수 없습니다.");
            }
        } catch (error) {
            console.error("유저 정보 불러오기 오류:", error);
        }
    };

    const {data: userData, isLoading, isError} = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/user/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            if (!response.ok) throw new Error("유저 정보를 불러올 수 없습니다.");
            return response.json();
        },
        enabled: isLoggedIn, 
        retry: false, 
    })

    useEffect(() => {
        if (userData) {
            const emailPrefix = userData.email.split('@')[0];
            setNickname(emailPrefix);
        }
    }, [userData]);

    

    return (
        <LayoutContainer>
            {isLoggedIn ? <NavbarLog nickname={nickname} onLogout={logout} /> : <Navbar />} 
            
            <UnderWrapp>
                <Sidbar/>

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

    color: white;
    overflow: hidden;
`
export default RootLayout;

