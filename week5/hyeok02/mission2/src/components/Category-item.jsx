import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const CategoryItem = ({ path, img, label }) => {
  return (
    <MovieLink to={path}>
      <MovieImage bg={img} />
      <MovieTitle>{label}</MovieTitle>
    </MovieLink>
  );
};

export default CategoryItem;
