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

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    top: auto;
    bottom: 0;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.5rem 0;
    border-top: 1px solid #333;
    z-index: 1000; 
  }
`;


const NavList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: auto;
  }
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

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    justify-content: center;
    flex-direction: column;
    svg {
      margin-right: 0;
      margin-bottom: 0.2rem;
    }
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
