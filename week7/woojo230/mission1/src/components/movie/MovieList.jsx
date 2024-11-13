import MovieCard from "./MovieCard";
import styled from "styled-components";
import useGetMovies from "../../hooks/queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MovieList = ({ categoryData }) => {
  const { data: movies, isLoading, isError } = useGetMovies(categoryData);

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩중</h1>;
  }

  if (isError) {
    return <h1 style={{ color: "white" }}>에러 발생</h1>;
  }

  return (
    <Container>
      {movies?.results?.map((data) => (
        <MovieCard id={data.id} key={data.id} title={data.title} poster_path={data.poster_path} overview={data.overview} release_date={data.release_date} />
      ))}
    </Container>
  );
};

export default MovieList;
