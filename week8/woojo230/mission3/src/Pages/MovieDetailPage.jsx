import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetMovieDetails from '../hooks/queries/useGetMovieDetails';
import useGetMovieCredits from '../hooks/queries/useGetMovieCredit';
import MoviePoster from '../components/movie/MoviePoster';
import MovieCredit from '../components/movie/MovieCredit';

const MovieDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0;

  @media (min-width: 769px) {
    padding: 0 20px;
  }
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();

  // 영화 세부 정보
  const {
    data: moviesData,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useGetMovieDetails(movieId);

  // 영화 출연진 정보
  const {
    data: castData,
    isLoading: isCastLoading,
    isError: isCastError,
  } = useGetMovieCredits(movieId);

  if (isMovieLoading || isCastLoading)
    return <h1 style={{ color: 'white' }}>로딩중...</h1>;

  if (isMovieError || isCastError)
    return <h1 style={{ color: 'white' }}>에러 발생</h1>;

  return (
    <MovieDetail>
      {moviesData && <MoviePoster moviesData={moviesData} />}
      {castData && <MovieCredit castData={castData} />}
    </MovieDetail>
  );
};

export default MovieDetailPage;
