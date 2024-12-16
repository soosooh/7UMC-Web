import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa"; // 지도 아이콘 추가

const Container = styled.div`
  width: 180px;
  min-height: calc(100vh - 5rem);
  background-color: #141517;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 160px;
    padding: 1.2rem 0.8rem;
  }

  @media (max-width: 600px) {
    width: 140px;
    padding: 1rem 0.6rem;
  }

  @media (max-width: 300px) {
    width: 120px;
    padding: 0.8rem 0.5rem;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    gap: 0.8rem;
  }

  @media (max-width: 300px) {
    gap: 0.6rem;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 300px) {
    font-size: 0.7rem;
  }
`;

const IconStyle = styled.div`
  font-size: 1.2rem;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 0.9rem;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <IconStyle><FaSearch /></IconStyle>
        <MenuLink to="/search">찾기</MenuLink>
      </Menu>
      <Menu>
        <IconStyle><BiSolidMoviePlay /></IconStyle>
        <MenuLink to="/movies">영화</MenuLink>
      </Menu>
      <Menu>
        <IconStyle><FaMapMarkerAlt /></IconStyle> 
        <MenuLink to="/map">지도</MenuLink>
      </Menu>
    </Container>
  );
};

export default Sidebar;
