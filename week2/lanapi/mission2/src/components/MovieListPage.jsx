
import React from "react";
import styled from "styled-components";
import { MOVIES } from "../mocks/Movies"; // MOVIES를 올바르게 import
import MovieCardComponent from "../components/MoviePosterPage";

const Div = styled.div`
  background-color: rgb(1, 1, 95);
  margin: 0;
  padding: 100px;
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const MovieListPage = () => {
  return (
    <Div>
      <MovieList>
        {MOVIES.results.map((movie) => (
          <MovieCardComponent movie={movie} key={movie.id} />
        ))}
      </MovieList>
    </Div>
  );
};

export default MovieListPage;
