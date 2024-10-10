import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Container = styled.div`
  display: flex;
  margin: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const MovieList = ({ category, authToken }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      setMovies(movies);
      console.log(movies);
    };
    getMovies();
  }, [category, authToken]);
  return (
    <Container>
      {movies.data?.results.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
      ))}
    </Container>
  );
};

export default MovieList;
