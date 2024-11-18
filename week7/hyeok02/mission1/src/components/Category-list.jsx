import React from 'react';
import styled from 'styled-components';
import CategoryItem from './Category-item';

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

const CategoryList = ({ categories }) => {
  return (
    <Container>
      <h1>카테고리</h1>
      <GridContainer>
        {categories.map((category) => (
          <CategoryItem
            key={category.path}
            path={category.path}
            img={category.img}
            label={category.label}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

export default CategoryList;
