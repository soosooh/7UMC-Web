import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import nowImg from '../assets/images/now.jpg';
import popularImg from '../assets/images/popular.jpg';
import ratedImg from '../assets/images/rated.webp';
import upcomingImg from '../assets/images/upcoming.jpg';

const CategoryPage = () => {
  return (
    <PageContainer>
      <h1>카테고리</h1>
      <ListContainer>
        <CategoryItem to="/movies/now-playing">
          <ItemImg bgImage={nowImg} />
          <ItemName>현재 상영중인</ItemName>
        </CategoryItem>
        <CategoryItem to="/movies/popular">
          <ItemImg bgImage={popularImg} />
          <ItemName>인기있는</ItemName>
        </CategoryItem>
        <CategoryItem to="/movies/top-rated">
          <ItemImg bgImage={ratedImg} />
          <ItemName>높은 평가를 받은</ItemName>
        </CategoryItem>
        <CategoryItem to="/movies/up-coming">
          <ItemImg bgImage={upcomingImg} />
          <ItemName>개봉 예정중인</ItemName>
        </CategoryItem>
      </ListContainer>
    </PageContainer>
  );
};

export default CategoryPage;

const PageContainer = styled.div`
  padding: 1rem 3rem;
  width: 100%;
`

const ListContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

const CategoryItem = styled(Link)`
  position: relative;
  border-radius: 4px;
  cursor: pointer;
`

const ItemImg = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgImage});
  border-radius: 4px;
`

const ItemName = styled.div`
  position: absolute;
  left: 0.25rem;
  bottom: 0.25rem;
  padding: 0 0.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  text-align: center;
`