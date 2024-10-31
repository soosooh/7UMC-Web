import styled from "styled-components";
import { Link } from "react-router-dom";

import LogIn from "../Pages/LogIn.jsx";
import SignUp from "../Pages/SignUp.jsx";

const Navbar__container = styled.div`
  background-color: rgb(20, 20, 20);
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar__icon = styled.div`
  color: hotpink;
  font-weight: bold;
  font-size: 30px;
  padding: 20px;
`;

const Navbar__button = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const LogInButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    color: darkgray;
  }
`;

const SignUpButton = styled(LogInButton)`
  background-color: #ff4d4d;
  border-radius: 5px;
`;

const Navbar = () => {
  return (
    <>
      <Navbar__container>
        <Navbar__icon>YONGCHA</Navbar__icon>
        <Navbar__button>
          <Link to="/LogIn">
            <LogInButton>로그인</LogInButton>
          </Link>
          <Link to="/SignUp">
            <SignUpButton>회원가입</SignUpButton>
          </Link>
        </Navbar__button>
      </Navbar__container>
    </>
  );
};

export default Navbar;
