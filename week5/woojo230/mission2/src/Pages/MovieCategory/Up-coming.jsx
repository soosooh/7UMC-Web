import React, { useState } from "react";
import MovieList from "../../components/MovieList";

const UpComing = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MovieList CategoryData="upcoming" />
    </>
  );
};

export default UpComing;
