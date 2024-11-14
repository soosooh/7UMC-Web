import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';

const SideNav = styled.nav`
  position: fixed;
  left: 0;
  top: 3.75rem; 
  width: 11rem;
  height: 100vh;
  background-color: #141517;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #FF073D;
  }

  svg {
    margin-right: 0.55rem;
  }
`;

const Sidebar = () => {
  return (
    <SideNav>
      <NavList>
        <NavItem to="/search">
          <AiOutlineSearch size={20} /> 찾기
        </NavItem>
        <NavItem to="/movies">
          <MdLocalMovies size={20} /> 영화
        </NavItem>
      </NavList>
    </SideNav>
  );
};

export default Sidebar;
