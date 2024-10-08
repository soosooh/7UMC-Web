import React, { useState } from "react";
import MovieList from "../../components/MovieList";
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
      <MovieList
        CategoryData="now_playing"
        Token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTYzYzUwZGQwMjI5Y2ViMDUyZGM5ZTNlMGRlOWEyNSIsIm5iZiI6MTcyODI4ODY3NC4zNTAxNDEsInN1YiI6IjY2ZmViY2JhYzlhMTBkNDZlYTdjOWQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hiJR7nmiA0-Hbx5nJuALWjUN0IzIMpWtGzKXplLYSYw"
      />
    </>
  );
};

export default NowPlaying;
