import React, { useState } from 'react';
import MovieList from '../../components/movie/MovieList';
const TopRated = () => {
  return (
    <>
      <MovieList categoryData="top_rated" />
    </>
  );
};

export default TopRated;
