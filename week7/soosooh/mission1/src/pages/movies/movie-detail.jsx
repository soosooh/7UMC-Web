import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/axios-instance";
import MovieHeader from "../../components/movie/movie-header";
import MovieCredit from "../../components/movie/movie-credit";
import styled from "styled-components";
import SkeletonCredit from "../../components/skeleton/skeleton-credit";
import useCustomFetch from "../../hooks/useCunstomFetch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MovieDetail = () => {
  const { movieId } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);

  if (isLoading) {
    return (
      <Container>
        <SkeletonCredit />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>
          에러가 발생했습니다. 다시 시도해주세요.
        </h1>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>영화 정보를 불러올 수 없습니다.</h1>
      </Container>
    );
  }

  return (
    <Container>
      <MovieHeader movie={movie} />
      <MovieCredit movie={movie} />
    </Container>
  );
};

export default MovieDetail;
