import React, { useState } from 'react';
import MovieList from '../../components/movie/MovieList';

const UpComing = () => {
  return (
    <>
      <MovieList categoryData="upcoming" />
    </>
  );
};

export default UpComing;
