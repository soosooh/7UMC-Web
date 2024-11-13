import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";
import MovieCard from "./movie-card";
import SkeletonCard from "../skeleton/skeleton-card";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: flex-start;
  gap: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const PageButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#888" : "#ff073d")};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 5px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#888" : "#ff073d")};
  }
`;

const PageInfo = styled.span`
  color: white;
  margin: 0 10px;
`;

const MovieList = ({ category }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", category, page],
    queryFn: async () => {
      const response = await axiosInstance.get(`/movie/${category}`, {
        params: { page, language: "ko-KR" },
      });
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <Container>
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
        {data?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </Container>
      <PaginationContainer>
        <PageButton
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          이전
        </PageButton>
        <PageInfo>{`${page} 페이지`}</PageInfo> {/* 페이지 정보 표시 */}
        <PageButton onClick={() => setPage((prev) => prev + 1)}>
          다음
        </PageButton>
      </PaginationContainer>
    </>
  );
};

export default MovieList;
