import { FaSearch } from "react-icons/fa";
import { BiSolidMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SideContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-shrink: 0;
  width: 180px;
  background-color: #413f3f;
  flex-direction: column;
  align-items: center;
`;
const Search = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  a {
    color: white;
  }
`;
const Movie = styled.div`
  a {
    color: white;
  }
`;
const Sidebar = () => {
  return (
    <SideContainer>
      <Search>
        <Link to="/search">
          <FaSearch /> 찾기
        </Link>
      </Search>

      <Movie>
        <Link to="movies">
          <BiSolidMovie /> 영화
        </Link>
      </Movie>
    </SideContainer>
  );
};

export default Sidebar;
