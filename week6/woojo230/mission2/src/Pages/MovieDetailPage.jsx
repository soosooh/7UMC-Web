import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import MoviePoster from "../components/movie/MoviePoster";
import MovieCredit from "../components/movie/MovieCredit";

const MovieDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const { moviesData, isLoading, isError } = useCustomFetch(`/movie/${movieId}?language=ko-KR&page=1`);
  const { moviesData: castData } = useCustomFetch(`movie/${movieId}/credits?language=ko-KR`);

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
    <MovieDetail>
      <MoviePoster moviesData={moviesData} />
      <MovieCredit castData={castData} />
    </MovieDetail>
  );
};

export default MovieDetailPage;
