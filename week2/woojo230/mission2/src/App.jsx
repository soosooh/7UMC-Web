// App.jsx
import React from "react";
import { MOVIES } from "./mocks/movies";
import styled, { createGlobalStyle } from "styled-components";
// Styled components
const GlobalStyle = createGlobalStyle`
  body {
    margin: 200px;
  }
`;

const Div = styled.div`
  background-color: rgb(1, 1, 95);
  margin: 0;
  padding: 100px;
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* 카드 사이의 간격 */
`;

const MovieCard = styled.div`
  background-color: darkslateblue;
  box-sizing: border-box;
  width: 200px; /* 카드의 최대 너비 */
  height: 380px;
  border-radius: 4px;
  position: relative; /* 자식 요소를 위한 기준점 설정 */
  overflow: hidden; /* 넘치는 내용 숨기기 */
`;

const MovieDescription = styled.p`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const MoviePoster = styled.img`
  width: 100%; /* 포스터가 카드 너비에 맞게 */
  height: auto; /* 비율 유지 */
`;

const MovieData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const Text = styled.p`
  font-size: 12px;
  color: white;
`;

const MovieCardHover = styled(MovieCard)`
  &:hover ${MovieDescription} {
    opacity: 1;
    visibility: visible;
  }
`;

const App = () => {
  return (
    <Div>
      <MovieList>
        {MOVIES.results.map((movie) => (
          <MovieCardHover key={movie.id}>
            <MovieDescription>{movie.overview}</MovieDescription>
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieData>
              <Text>{movie.title}</Text>
              <Text>{movie.vote_average}</Text>
            </MovieData>
          </MovieCardHover>
        ))}
      </MovieList>
    </Div>
  );
};

export default App;
