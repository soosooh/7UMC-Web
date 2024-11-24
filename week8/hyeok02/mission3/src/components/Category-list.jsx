import React from 'react';
import styled from 'styled-components';
import CategoryItem from './Category-item';

const Container = styled.div`
  padding: 1rem 3rem;
  width: 100%;

  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 300px) {
    padding: 0.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.8rem;
    padding: 0.8rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.6rem;
    padding: 0.6rem;
  }

  @media (max-width: 300px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
    padding: 0.5rem;
  }
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
