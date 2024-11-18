import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import useGetInfiniteMovie from "../../hooks/queries/useGetInfiniteMovie";
import { useInView } from "react-intersection-observer";
import SkeletonList from "../skeleton/skeletonList";
import { ClipLoader } from "react-spinners";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 15px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const MovieList = ({ categoryData }) => {
  const { data: movies, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetInfiniteMovie(categoryData);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <Container>
        <SkeletonList />
      </Container>
    );
  }

  if (isError) {
    return <h1 style={{ color: "white" }}>에러 발생</h1>;
  }

  return (
    <Container>
      {movies?.pages.map((page) =>
        page.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
            release_date={movie.release_date}
          />
        ))
      )}

      {/* 로딩 스피너 */}
      {isFetchingNextPage && (
        <SpinnerContainer>
          <ClipLoader color="#3498db" size={30} />
        </SpinnerContainer>
      )}

      {/* 무한 스크롤 트리거*/}
      <div ref={ref} style={{ height: "20px", backgroundColor: "transparent" }} />
    </Container>
  );
};

export default MovieList;
