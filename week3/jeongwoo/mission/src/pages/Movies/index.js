import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 이미지 import
import nowPlayingImage from '../../images/image1.png';
import popularImage from '../../images/image2.png';
import topRatedImage from '../../images/image3.png';
import upcomingImage from '../../images/image4.png';

const MoviesContainer = styled.div`
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled(Link)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: white;
  aspect-ratio: 16 / 9;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryTitleWrapper = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 4px;
`;

const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`;

const Movies = () => {
  const categories = [
    { title: '현재 상영중인', path: 'now-playing', image: nowPlayingImage },
    { title: '인기있는', path: 'popular', image: popularImage },
    { title: '높은 평가를 받은', path: 'top-rated', image: topRatedImage },
    { title: '개봉 예정', path: 'upcoming', image: upcomingImage },
  ];

  return (
    <MoviesContainer>
      <Title>카테고리</Title>
      <CategoryGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index} to={`/movies/${category.path}`}>
            <CategoryImage src={category.image} alt={category.title} />
            <CategoryTitleWrapper>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryTitleWrapper>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </MoviesContainer>
  );
};

export default Movies;