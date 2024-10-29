import styled from "styled-components";
import { Link } from "react-router-dom";
import nowPlayingImg from "../../assets/images/nowPlaying.jpeg";
import popularImg from "../../assets/images/popular.jpeg";
import topRatedImg from "../../assets/images/toprated.jpeg";
import upcomingImg from "../../assets/images/upcoming.jpeg";

const CategoryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  width: 100%;]
`;

const CategoryCard = styled(Link)`  
  margin-top: 1rem;
  text-decoration: none;
  color: white;
  position: relative;
  border-radius: 1rem;

  img {
    width: 20rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 10px;
  }

  h3 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const CategoriesPageContainer = styled.div`
  width: 100%; 
  height: 100%;
  padding: 2rem; 
  color: white;
`;

const CategoriesPage = () => {
  return (
    <CategoriesPageContainer>
      <h1>카테고리</h1>
      <CategoryContainer>
        <CategoryCard to="/movies/now-playing">
          <img src={nowPlayingImg} alt="Now Playing" />
          <h3>현재 상영중인</h3>
        </CategoryCard>
        <CategoryCard to="/movies/popular">
          <img src={popularImg} alt="Popular" />
          <h3>인기있는</h3>
        </CategoryCard>
        <CategoryCard to="/movies/top-rated">
          <img src={topRatedImg} alt="Top Rated" />
          <h3>높은 평가를 받은</h3>
        </CategoryCard>
        <CategoryCard to="/movies/upcoming">
          <img src={upcomingImg} alt="Upcoming" />
          <h3>개봉 예정중인</h3>
        </CategoryCard>
      </CategoryContainer>
    </CategoriesPageContainer>
  );
};

export default CategoriesPage;
