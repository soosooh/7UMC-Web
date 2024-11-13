import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";

const Sidebar__container = styled.div`
  background-color: rgb(20, 20, 20);
  width: 13%;
  height: 100%; /* 부모 컨테이너의 높이에 따라 확장되도록 수정 */
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Find__button = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 0px 20px;
  gap: 10px;
`;

const Movie__button = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 0px 20px;
  gap: 10px;
`;

const Button = styled.p``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Sidebar = () => {
  return (
    <Sidebar__container>
      <StyledLink to="/Search">
        <Find__button>
          <FaSearch />
          <Button>찾기</Button>
        </Find__button>
      </StyledLink>
      <StyledLink to="/Movies">
        <Movie__button>
          <PiFilmSlateBold />
          <Button>영화</Button>
        </Movie__button>
      </StyledLink>
    </Sidebar__container>
  );
};

export default Sidebar;
