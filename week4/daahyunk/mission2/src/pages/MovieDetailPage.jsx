import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';

const MovieDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  color: white;
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

  const { data: movie, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&api_key=${token}`);

  if (loading) {
    return <MovieDetailContainer>로딩 중입니다...</MovieDetailContainer>;
  }

  if (error) {
    return <MovieDetailContainer>영화 데이터를 불러오는 데 실패했습니다.</MovieDetailContainer>;
  }

  if (!movie) {
    return <MovieDetailContainer>영화 데이터가 없습니다.</MovieDetailContainer>;
  }

  return (
    <MovieDetailContainer>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>개봉일: {movie.release_date}</p>
      <p>평점: {movie.vote_average}</p>
    </MovieDetailContainer>
  );
};

export default MovieDetailPage;
