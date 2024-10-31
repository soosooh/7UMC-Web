import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
