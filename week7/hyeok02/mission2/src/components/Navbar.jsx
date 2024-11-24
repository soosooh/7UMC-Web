import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axiosInstance from '../api/auth';
import Item from './Item';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #141517;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const BrandLogo = styled(Link)`
  font-size: 20px;
  font-weight: bold;  
  color: #FF073D;
  text-decoration: none;
  cursor: pointer;
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const ActionLink = styled(Link)`
  color: white;
  padding: 0.5rem 0.75rem;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LoginLink = styled(ActionLink)`
  &:hover {
    color: #f6f6f6;
  }
`;

const RegisterLink = styled(ActionLink)`
  background-color: #F82F62;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e52958;
  }
`;

const fetchUserInfo = async () => {
  const { data } = await axiosInstance.get('/user/info');
  return data;
};

const Navbar = ({ userEmail, setUserEmail }) => {
  const navigate = useNavigate();

  const { data: user, isLoading, isError, error } = useQuery('userInfo', fetchUserInfo, {
    enabled: !!userEmail, 
    onSuccess: (data) => setUserEmail(data.email),
  });

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUserEmail(null); 
    navigate('/login'); 
  };

  if (isLoading) {
    return (
      <Container>
        <BrandLogo to="/home">YongCHA</BrandLogo>
        <ActionContainer>
          <Item skeleton /> {/* 로딩 중 Skeleton UI 표시 */}
        </ActionContainer>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <BrandLogo to="/home">YongCHA</BrandLogo>
        <ActionContainer>
          <p>에러가 발생했습니다: {error.message}</p> {/* 에러 메시지 표시 */}
        </ActionContainer>
      </Container>
    );
  }

  return (
    <Container>
      <BrandLogo to="/home">YongCHA</BrandLogo>
      <ActionContainer>
        {userEmail ? (
          <>
            <span style={{ color: 'white' }}>{userEmail}님 반갑습니다</span>
            <ActionLink as="button" onClick={handleLogout}>로그아웃</ActionLink>
          </>
        ) : (
          <>
            <LoginLink to="/login">로그인</LoginLink>
            <RegisterLink to="/signup">회원가입</RegisterLink>
          </>
        )}
      </ActionContainer>
    </Container>
  );
};

export default Navbar;
