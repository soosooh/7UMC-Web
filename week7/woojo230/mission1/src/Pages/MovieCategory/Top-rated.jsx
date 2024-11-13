import React, { useState } from "react";
import MovieList from "../../components/movie/MovieList";
const TopRated = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MovieList categoryData="top_rated" />
    </>
  );
};

export default TopRated;
