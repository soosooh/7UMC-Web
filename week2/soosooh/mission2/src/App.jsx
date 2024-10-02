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
  return (
    <Container>
      {MOVIES.results.map((movie) => (
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
