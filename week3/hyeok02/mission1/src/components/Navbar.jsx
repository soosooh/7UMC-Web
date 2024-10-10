import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #121314; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const BrandLogo = styled(Link)`
  font-size: 19px;
  font-weight: bold;
  color: #FF073D;
  text-decoration: none;
  cursor: pointer;
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 1.25rem; 
`;

const ActionLink = styled(Link)`
  color: white;
  padding: 0.45rem 0.7rem; 
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 13px; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LoginLink = styled(ActionLink)`
  &:hover {
    color: #eaeaea; 
  }
`;

const RegisterLink = styled(ActionLink)`
  background-color: #F83F63; 
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e53a5a; 
  }
`;

const Navbar = () => {
  return (
    <Container>
      <BrandLogo to="/">YongCHA</BrandLogo>
      <ActionContainer>
        <LoginLink to="/login">로그인</LoginLink>
        <RegisterLink to="/signup">회원가입</RegisterLink>
      </ActionContainer>
    </Container>
  );
};

export default Navbar;
