import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetchData from '../Hook/Hook';
import CastCard from '../components/Credit';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 9rem;
  align-items: center;
  gap: 2.5rem;
`;

const BackgroundSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  min-height: 55vh;
  padding: 2.5rem;
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
`;

const BackdropOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: inherit;
  z-index: 1;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 1rem;
  z-index: 2;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
`;

const InfoText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
`;

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 1rem 0;
`;

const MovieDetails = () => {
    const { movieId } = useParams();
    const { data: movie, loading, error } = useFetchData(`/movie/${movieId}?language=ko-KR`);
    const { data: castAndCrew } = useFetchData(`/movie/${movieId}/credits?language=ko-KR`);
  
    if (loading) return <div>loading</div>;
    if (error) return <div>error</div>;
  
    // 감독 정보 및 주요 출연진 정보 추출
    const directorInfo = castAndCrew?.crew?.find((crewMember) => crewMember.job === 'Director');
    const mainCast = castAndCrew?.cast?.slice(0, 10) || [];
  
    return (
      <Container>
        <BackgroundSection imageUrl={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}>
          <BackdropOverlay />
          <DetailsContainer>
            <Heading>{movie?.title}</Heading>
            <InfoText>원제: {movie?.original_title}</InfoText>
            <InfoText>개봉일: {movie?.release_date}</InfoText>
            <InfoText>평점: {movie?.vote_average} / 10</InfoText>
            <InfoText>상영 시간: {movie?.runtime}분</InfoText>
            <InfoText>태그라인: {movie?.tagline || 'N/A'}</InfoText>
            <InfoText>{movie?.overview || '줄거리 정보가 없습니다.'}</InfoText>
          </DetailsContainer>
        </BackgroundSection>
        
        <Heading>제작진 및 주요 출연진</Heading>
        <CastContainer>
          {/* 감독 정보 표시 */}
          {directorInfo ? (
            <CastCard
              role="감독"
              name={directorInfo.name}
              originalName={directorInfo.original_name}
              profilePath={directorInfo.profile_path}
            />
          ) : (
            <div>감독 정보가 없습니다.</div>
          )}
          
          {/* 주요 출연진 표시 */}
          {mainCast.length > 0 ? (
            mainCast.map((actor) => (
              <CastCard
                key={actor.id}
                role="출연진"
                name={actor.name}
                originalName={actor.original_name}
                profilePath={actor.profile_path}
              />
            ))
          ) : (
            <div>출연진 정보가 없습니다.</div>
          )}
        </CastContainer>
      </Container>
    );
  };
  
  export default MovieDetails;
  
