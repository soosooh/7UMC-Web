import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/axios-instance";
import MovieHeader from "../../components/movie/movie-header";
import MovieCredit from "../../components/movie/movie-credit";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axiosInstance.get(
          `/movie/${movieId}?language=ko-KR`
        );
        setMovie(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩 중입니다...</h1>;
  }

  if (isError) {
    return <h1 style={{ color: "white" }}>에러가 발생했습니다...</h1>;
  }
  return (
    <Container>
      <MovieHeader movie={movie} />
      <MovieCredit movie={movie} />
    </Container>
  );
};

export default MovieDetail;
