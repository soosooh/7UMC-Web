import MovieCard from "./MovieCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { axiosInstance } from "../../apis/axios-instance";
import useCustomFetch from "../../hooks/useCustomFetch";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 카드 사이의 간격 */
`;

//소괄호는 return문이 생략가능하지만, 중괄호를 사용한다면 return문을 작성해줘야함.
const MovieList = ({ CategoryData }) => {
  // const [moviesData, setMoviesData] = useState([]);

  // useEffect(() => {
  //   const getMoviesData = async () => {
  //     const moviesData = await axiosInstance.get(
  //       `/movie/${CategoryData}?language=ko-KR&page=1`
  //     );
  //     setMoviesData(moviesData);
  //   };
  //   getMoviesData();
  // }, []);

  const { moviesData, isLoading, isError } = useCustomFetch(`/movie/${CategoryData}?language=ko-KR&page=1`);

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>로딩중</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러 발생</h1>
      </div>
    );
  }

  return (
    <Container>
      {moviesData.data?.results.map((data) => (
        <MovieCard id={data.id} key={data.id} title={data.title} poster_path={data.poster_path} overview={data.overview} release_date={data.release_date} />
      ))}
    </Container>
  );
};

export default MovieList;
