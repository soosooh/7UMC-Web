import MovieCard from "./MovieCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 카드 사이의 간격 */
`;

//소괄호는 return문이 생략가능하지만, 중괄호를 사용한다면 return문을 작성해줘야함.
const MovieList = ({ CategoryData, Token }) => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      const moviesData = await axios.get(
        `https://api.themoviedb.org/3/movie/${CategoryData}?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );
      setMoviesData(moviesData);
    };
    getMoviesData();
  }, []);

  return (
    <Container>
      {moviesData.data?.results.map((data) => (
        <MovieCard
          key={data.id}
          title={data.title}
          poster_path={data.poster_path}
          overview={data.overview}
          release_date={data.release_date}
        />
      ))}
    </Container>
  );
};

export default MovieList;
