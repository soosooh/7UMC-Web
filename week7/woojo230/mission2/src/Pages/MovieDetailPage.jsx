import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetMovieDetails from "../hooks/queries/useGetMovieDetails";
import useGetMovieCredits from "../hooks/queries/useGetMovieCredit";
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

  const { data: moviesData, isLoading: isMovieLoading, isError: isMovieError } = useGetMovieDetails(movieId);
  const { data: castData, isLoading: isCastLoading, isError: isCastError } = useGetMovieCredits(movieId);

  if (isMovieLoading || isCastLoading) return <h1 style={{ color: "white" }}>로딩중...</h1>;

  if (isMovieError || isCastError) return <h1 style={{ color: "white" }}>에러 발생</h1>;

  const isValidData = moviesData && moviesData.title && moviesData.backdrop_path;

  return (
    <MovieDetail>
      {isValidData ? <MoviePoster moviesData={moviesData} /> : <h2 style={{ color: "white" }}>영화 데이터를 찾을 수 없습니다.</h2>}
      {castData && <MovieCredit castData={castData} />}
    </MovieDetail>
  );
};

export default MovieDetailPage;
