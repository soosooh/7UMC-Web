import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./movie-card";
import useCustomFetch from "../../hooks/useCunstomFetch";
import SkeletonCard from "../skeleton/skeleton-card";
import { ClipLoader } from "react-spinners";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: flex-start;
  gap: 20px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3px;
`;

const MovieList = ({ category }) => {
  const {
    data: movies,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCustomFetch(`/movie/${category}?language=ko-KR`);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        console.log(isFetchingNextPage);
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isLoading) {
    return (
      <Container>
        <SpinnerContainer>
          <ClipLoader color="#fff" size={50} />
        </SpinnerContainer>
        {Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </Container>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러 중 입니다...</h1>
      </div>
    );
  }

  return (
    <>
      <Container>
        {movies?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.results.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </React.Fragment>
        ))}
      </Container>
      {isFetchingNextPage && (
        <SpinnerContainer>
          <ClipLoader color="#fff" size={300} />
        </SpinnerContainer>
      )}
    </>
  );
};

export default MovieList;
