import React, { useState } from "react";
import MovieList from "../../components/movie/MovieList";

const UpComing = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MovieList categoryData="upcoming" />
    </>
  );
};

export default UpComing;
