import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tokenStorage from '../../utils/tokenStorage';
import authApi from '../../api/authApi';

const Nav = styled.nav`
 background-color: #413f3f;
 padding: 1rem 2rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const Logo = styled(Link)`
 color: #e50914;
 font-size: 1.5rem;
 font-weight: bold;
 text-decoration: none;
`;

const AuthButtons = styled.div`
 display: flex;
 gap: 1rem;
 align-items: center;
`;

const AuthButton = styled(Link)`
 color: white;
 text-decoration: none;
 padding: 0.5rem 1rem;
 border-radius: 4px;
 transition: background-color 0.3s, color 0.3s;

 &:hover {
   background-color: white;
   color: #141414;
 }
`;

const SignUpButton = styled(AuthButton)`
 background-color: #e50914;
 
 &:hover {
   background-color: #f40612;
   color: white;
 }
`;

const UserInfo = styled.span`
 color: white;
 margin-right: 1rem;
`;

const LogoutButton = styled.button`
 color: white;
 text-decoration: none;
 padding: 0.5rem 1rem;
 border-radius: 4px;
 border: none;
 background-color: transparent;
 cursor: pointer;
 transition: background-color 0.3s, color 0.3s;

 &:hover {
   background-color: white;
   color: #141414;
 }
`;

const Navbar = () => {
 const navigate = useNavigate();
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [userEmail, setUserEmail] = useState('');

 useEffect(() => {
   const checkLoginStatus = async () => {
     const token = localStorage.getItem('accessToken');
     console.log('Current token:', token);
     
     if (token) {
       setIsLoggedIn(true);
       try {
         const userInfo = await authApi.getUserInfo();
         console.log('User info received:', userInfo);
         if (userInfo && userInfo.email) {
           const nickname = userInfo.email.split('@')[0];
           setUserEmail(nickname);
         }
       } catch (error) {
         console.error('Failed to fetch user info:', error);
         if (error.response?.status === 401) {
           tokenStorage.removeTokens();
           setIsLoggedIn(false);
           setUserEmail('');
         }
       }
     } else {
       setIsLoggedIn(false);
       setUserEmail('');
     }
   };

   checkLoginStatus();
   
   const interval = setInterval(checkLoginStatus, 30000);
   
   return () => clearInterval(interval);
 }, []);

 const handleLogout = () => {
   tokenStorage.removeTokens();
   setIsLoggedIn(false);
   setUserEmail('');
   alert('로그아웃 되었습니다.');
   navigate('/');
 };

 return (
   <Nav>
     <Logo to="/">YONGCHA</Logo>
     <AuthButtons>
       {isLoggedIn ? (
         <>
           <UserInfo>{userEmail}님</UserInfo>
           <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
         </>
       ) : (
         <>
           <AuthButton to="/login">로그인</AuthButton>
           <SignUpButton to="/signup">회원가입</SignUpButton>
         </>
       )}
     </AuthButtons>
   </Nav>
 );
};

export default Navbar;
