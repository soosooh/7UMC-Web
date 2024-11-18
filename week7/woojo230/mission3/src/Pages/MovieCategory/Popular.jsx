import React, { useState } from "react";
import MovieList from "../../components/movie/MovieList";

const Popular = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MovieList categoryData="popular" />
    </>
  );
};

export default Popular;
