import React from 'react';
import { Container, Title } from '../../styles/commonStyles';
import { MOVIE_CATEGORIES } from '../../utils/constants';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const CategoryList = () => {
  return (
    <Container>
      <Title>카테고리</Title>
      <CategoryGrid>
        {MOVIE_CATEGORIES.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </CategoryGrid>
    </Container>
  );
};

export default CategoryList;


