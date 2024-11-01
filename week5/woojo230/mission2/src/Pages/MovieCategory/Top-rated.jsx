import React, { useState } from "react";
import MovieList from "../../components/MovieList";

const TopRated = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MovieList CategoryData="top_rated" />
    </>
  );
};

export default TopRated;
