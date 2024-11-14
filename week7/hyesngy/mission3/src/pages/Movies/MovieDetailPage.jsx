import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import MovieDetailBanner from '../../components/Movies/MovieDetailBanner';
import CreditList from '../../components/Movies/CreditList';
import Spinner from '../../components/spinner';

const PageContainer = styled.div`
  width:100%;
  display:flex;
  padding: 3rem 10rem;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px){
    padding: 3rem;
  }
`

const TitleP = styled.p`
  font-family: Inter;
  font-size: 2rem;
  font-weight: 800;
  line-height: 24.2px;
`

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading, isError } = useCustomFetch(`/movie/${movieId}?append_to_response=credits&language=ko-KR`)

  if (isLoading || !movie) {
    return <div><Spinner /></div>;
  }
  if (isError) {
    return <div>에러 발생...</div>;
  }

  return (
    <PageContainer>
      <MovieDetailBanner movie={movie} />
      <TitleP>감독/출연</TitleP>
      <CreditList movie={movie} />
    </PageContainer>
  );
};

export default MovieDetailPage;