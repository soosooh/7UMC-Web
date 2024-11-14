import React, { useState } from "react";
import MovieList from "../../components/movie/MovieList";
import { createGlobalStyle } from "styled-components";

// Styled components
// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: rgb(1, 1, 95);
//     margin: 0px;
//     padding-top: 20px;
//   }
// `;

const NowPlaying = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MovieList categoryData="now_playing" />
    </>
  );
};

export default NowPlaying;
