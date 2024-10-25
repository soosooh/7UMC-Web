import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141517;
  color: white;
  height: 4rem; 
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; 
`;

const Logo = styled(Link)`
  font-size: 1.5rem; 
  font-weight: bold;
  color: #FF073D; 
  margin-left: 2rem;
  text-decoration: none;

  &:hover {
    color: #d02148;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin-right: 2rem;
    font-size: 1rem;

    &:hover {
      color: #ddd; 
    }
  }
`;

const SignUpButton = styled(Link)`
  background-color: #FF073D; 
  color: white;
  padding: 0.5rem 1rem;  
  border-radius: 0.5rem; 
  font-size: 1rem; 
  text-decoration: none;

  &:hover {
    background-color: #d02148;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">YONGCHA</Logo>
      <NavLinks>
        <Link to="/login">로그인</Link>
        <SignUpButton to="/signup">회원가입</SignUpButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
