import {Outlet} from "react-router-dom";
import Navbar from "../components/navbars/navbar.jsx";
import NavbarLog from "../components/navbars/navbarLog.jsx";
import Sidbar from "../components/sidebar.jsx";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/LoginContext.jsx";



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

    useEffect(() => {
        if (isLoggedIn) {
            fetchUserInfo();
        }
    }, [isLoggedIn]);

    

    return (
        <LayoutContainer>
            {isLoggedIn ? <NavbarLog nickname={nickname} onLogout={logout} /> : <Navbar />} 
            
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

