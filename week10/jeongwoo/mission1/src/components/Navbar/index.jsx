import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import tokenStorage from '../../contexts/tokenStorage';
import authApi from '../../api/authApi';
import { getLogoutRedirectURI } from '../../api/redirectURI';

const Nav = styled.nav`
 background-color: #413f3f;
 padding: 0.5rem 1rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 100;

 @media (min-width: 768px) {
   padding: 1rem 2rem;
   position: sticky;
 }
`;

const Logo = styled(Link)`
 color: #e50914;
 font-size: 1.2rem;
 font-weight: bold;
 text-decoration: none;
 flex-shrink: 0;

 @media (min-width: 768px) {
   font-size: 1.5rem;
 }
`;

const AuthButtons = styled.div`
 display: flex;
 gap: 0.5rem;
 align-items: center;

 @media (min-width: 768px) {
   gap: 1rem;
 }
`;

const AuthButton = styled(Link)`
 color: white;
 text-decoration: none;
 padding: 6px 12px;
 border-radius: 4px;
 font-size: 12px;
 transition: background-color 0.3s, color 0.3s;

 @media (min-width: 768px) {
   padding: 8px 16px;
   font-size: 14px;
 }

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
 margin-right: 0.5rem;
 font-size: 12px;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 max-width: 120px;

 @media (min-width: 768px) {
   font-size: 14px;
   margin-right: 1rem;
   max-width: 200px;
 }
`;

const LogoutButton = styled.button`
 color: white;
 text-decoration: none;
 padding: 6px 12px;
 border-radius: 4px;
 border: none;
 background-color: transparent;
 cursor: pointer;
 transition: background-color 0.3s, color 0.3s;
 font-size: 12px;

 @media (min-width: 768px) {
   padding: 8px 16px;
   font-size: 14px;
 }

 &:hover {
   background-color: white;
   color: #141414;
 }
`;


const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const isKakaoLogin = localStorage.getItem('isKakaoLogin');
  const kakaoToken = localStorage.getItem('kakaoToken');
  const username = localStorage.getItem('userNickname');

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_TOKEN);
    }
  }, []);

  const { data: userInfo, isError } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.getUserInfo,
    enabled: !!token && !isKakaoLogin,
    retry: false,
    onError: (error) => {
      if (error.response?.status === 401) {
        tokenStorage.removeTokens();
      }
    },
    select: (data) => ({
      isLoggedIn: true,
      nickname: data.email ? data.email.split('@')[0] : ''
    })
  });

  const isLoggedIn = (!!token && !isError && userInfo?.isLoggedIn) || isKakaoLogin === 'true';
  const displayName = username || userInfo?.nickname || '';

  const handleLogout = () => {
    if (isKakaoLogin === 'true') {
      localStorage.removeItem('isKakaoLogin');
      localStorage.removeItem('kakaoToken');
      localStorage.removeItem('userNickname');
      
      const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_TOKEN;
      const logoutRedirectUri = getLogoutRedirectURI();
      window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_REST_API_KEY}&logout_redirect_uri=${logoutRedirectUri}`;
    } else {
      tokenStorage.removeTokens();
      navigate('/');
    }
  };

  return (
    <Nav>
      <Logo to="/">YONGCHA</Logo>
      <AuthButtons>
        {isLoggedIn ? (
          <>
            <UserInfo>{displayName}님 환영합니다</UserInfo>
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