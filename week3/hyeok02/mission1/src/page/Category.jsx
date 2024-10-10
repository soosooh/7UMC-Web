import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NowPlayingImg from '../assets/NowPlaying.png';
import TopRatedImg from '../assets/TopRated.png';
import PopularImg from '../assets/Popular.png';
import UpComingImg from '../assets/UpComing.png';

const Container = styled.div`
  padding: 1rem 3rem;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const MovieLink = styled(Link)`
  position: relative;
  display: block;
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
`;

const MovieImage = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;

const MovieTitle = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  font-size: 1rem;
`;

const categoryData = [
  { path: '/movies/now-playing', img: NowPlayingImg, label: '현재 상영중인' },
  { path: '/movies/popular', img: PopularImg, label: '인기있는' },
  { path: '/movies/top-rated', img: TopRatedImg, label: '높은 평가를 받은' },
  { path: '/movies/up-coming', img: UpComingImg, label: '개봉 예정중인' },
];

const Category = () => {
  return (
    <Container>
      <h1>카테고리</h1>
      <GridContainer>
        {categoryData.map((category) => (
          <MovieLink key={category.path} to={category.path}>
            <MovieImage bg={category.img} />
            <MovieTitle>{category.label}</MovieTitle>
          </MovieLink>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Category;
