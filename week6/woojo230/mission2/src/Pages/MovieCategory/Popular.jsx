import React, { useState } from "react";
import MovieList from "../../components/movie/MovieList";

const Popular = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MovieList CategoryData="popular" />
    </>
  );
};

export default Popular;
