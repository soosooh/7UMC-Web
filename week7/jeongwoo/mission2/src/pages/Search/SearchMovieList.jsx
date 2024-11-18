import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchMovieItem from './SearchMovieItem';

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px 0;
  position: relative;
`;

const SearchMovieList = ({ movies }) => {
  return (
    <MoviesGrid>
      {movies.map(movie => (
        <SearchMovieItem key={movie.id} movie={movie} />
      ))}
    </MoviesGrid>
  );
};

SearchMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // 다른 필요한 movie prop types
    })
  ).isRequired,
};

export default SearchMovieList;