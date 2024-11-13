import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../utils/queryClient';
import styled from 'styled-components';
import tokenStorage from '../../contexts/tokenStorage';
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
  const token = localStorage.getItem('accessToken');

  const { data: userInfo, isError } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.getUserInfo,
    enabled: !!token,
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

  const isLoggedIn = !!token && !isError && userInfo?.isLoggedIn;
  const userEmail = userInfo?.nickname || '';

  const handleLogout = () => {
    tokenStorage.removeTokens();
    // React Query 캐시 무효화
    queryClient.invalidateQueries(['user']);
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
