import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import Poster from '../../components/movies/Poster'; 
import Credits from '../../components/movies/Credits';

const MovieDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const { data: movie, loading: movieLoading, error: movieError } = useFetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`);

  const { data: credits, loading: creditsLoading, error: creditsError } = useFetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`);

  if (movieLoading || creditsLoading) {
    return <MovieDetailContainer>로딩 중입니다...</MovieDetailContainer>;
  }

  if (movieError || creditsError) {
    return <MovieDetailContainer>데이터를 불러오는 데 실패했습니다.</MovieDetailContainer>;
  }

  if (!movie || !credits) {
    return <MovieDetailContainer>영화 데이터가 없습니다.</MovieDetailContainer>;
  }

  return (
    <MovieDetailContainer>
      <Poster movie={movie} /> 
      <Credits credits={credits} /> 
    </MovieDetailContainer>
  );
};

export default MovieDetailPage;
