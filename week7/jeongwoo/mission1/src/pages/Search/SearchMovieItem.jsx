import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../components/MovieCard';

const SearchMovieItem = ({ movie }) => {
  return <MovieCard movie={movie} />;
};

SearchMovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // 다른 필요한 movie prop types
  }).isRequired,
};

export default SearchMovieItem;
