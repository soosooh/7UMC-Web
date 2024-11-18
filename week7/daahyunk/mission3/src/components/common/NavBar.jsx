import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

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

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 1rem;
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

  @media (max-width: 768px) {
    a {
      font-size: 0.9rem;
      margin-right: 1rem;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const LogoutButton = styled.button`
  background-color: #4E5052;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;

  &:hover {
    background-color: #26282A;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userName, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    logout();
    navigate("/login");
  };

  return (
    <Nav>
      <Logo to="/">YONGCHA</Logo>
      <NavLinks>
        {isLoggedIn ? (
          <>
            <span>{userName}님 반갑습니다</span>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <SignUpButton to="/signup">회원가입</SignUpButton>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
