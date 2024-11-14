import React, { useState } from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import useGetPagination from "../../hooks/queries/useGetPagenation";
import { ClipLoader } from "react-spinners";

const Container = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center; /* 그리드 아이템 중앙 정렬 */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    padding: 0 10px;
  }
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    min-width: 80px; /* 모바일에서 최소 너비 설정 */
  }
`;

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  min-width: 100px;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
    min-width: 80px;
  }
`;

const PageNumber = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0 15px;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  @media (max-width: 768px) {
    font-size: 12px; /
  }
`;

const MovieList = ({ categoryData }) => {
  const [page, setPage] = useState(1);
  const { data: movies, isLoading, isError, isFetching } = useGetPagination(categoryData, page);

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <ClipLoader color="#3498db" size={50} />
      </SpinnerContainer>
    );
  }

  if (isError) {
    return <h1 style={{ color: "white" }}>에러 발생</h1>;
  }

  return (
    <>
      <Container>
        {movies?.results?.length > 0 ? (
          movies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
            />
          ))
        ) : (
          <h2 style={{ color: "white" }}>영화 데이터가 없습니다.</h2>
        )}
      </Container>

      <ButtonContainer>
        <PaginationButton onClick={handlePrevPage} disabled={page === 1}>
          이전 페이지
        </PaginationButton>
        <PageNumber>Page {page}</PageNumber>
        <PaginationButton onClick={handleNextPage}>다음 페이지</PaginationButton>
      </ButtonContainer>
    </>
  );
};

export default MovieList;
