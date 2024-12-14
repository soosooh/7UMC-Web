import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { PiFilmSlateBold } from 'react-icons/pi';

const Sidebar__container = styled.div`
  background-color: rgb(20, 20, 20);
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  padding: 0 10px;

  @media (min-width: 768px) {
    width: 13%;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0;
  }
`;

const Find__button = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  font-size: 14px;
  padding: 8px 12px;
  gap: 8px;
  margin-left: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

const Movie__button = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  font-size: 14px;
  padding: 8px 12px;
  gap: 8px;
  margin-left: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

const Button = styled.p``;

const StyledLink = styled(Link)`
  text-decoration: none; /* 링크 밑줄 없애기 */
`;

const Sidebar = () => {
  return (
    <>
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
    </>
  );
};

export default Sidebar;
