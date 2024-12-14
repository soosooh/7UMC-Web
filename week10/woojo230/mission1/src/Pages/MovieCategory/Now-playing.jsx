import React, { useState } from 'react';
import MovieList from '../../components/movie/MovieList';
import { createGlobalStyle } from 'styled-components';

const NowPlaying = () => {
  return (
    <>
      <MovieList categoryData="now_playing" />
    </>
  );
};

export default NowPlaying;
