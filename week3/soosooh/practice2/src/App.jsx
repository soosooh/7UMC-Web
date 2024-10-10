import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { MOVIES } from "./mocks/movies";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  justify-content: center;
  background-color: #232649;
`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODljNDFhNzM5MTEwNGJjN2MzMjc3NDZmZTgyZGM5OSIsIm5iZiI6MTcyODI2MTM4MS4xNjMxOTYsInN1YiI6IjY3MDI1ODc4ZTQ4MDE0OTE0Njg1OGU3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRBQDs9nj-5I5Mh9P4rUyDCJAmLnRVKL1y1XhedeOlM`,
          },
        }
      );
      setMovies(movies);
      console.log(movies);
    };
    getMovies();
  }, []);
  return (
    <Container>
      {movies.data?.results.map((movie) => (
        <MovieCard
          key={movie.id}
          original_title={movie.original_title}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
      ))}
    </Container>
  );
}

export default App;
