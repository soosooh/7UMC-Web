import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: white;
  aspect-ratio: 16 / 9;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleWrapper = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`;

const CategoryItem = ({ category }) => {
  return (
    <Card to={`/movies/${category.path}`}>
      <Image src={category.image} alt={category.title} />
      <TitleWrapper>
        <Title>{category.title}</Title>
      </TitleWrapper>
    </Card>
  );
};

export default CategoryItem;