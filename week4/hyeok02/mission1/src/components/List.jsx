import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './Item';
import Hook from '../Hook/Hook';

const Container = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const List = ({ url }) => {
  const { movies, loading, error } = Hook(url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired,
};

export default List;
