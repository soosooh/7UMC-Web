import React from 'react';
import styled from 'styled-components';
import CastCard from './Credit';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 9rem;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 900px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 3rem;
  }

  @media (max-width: 300px) {
    padding: 1rem;
  }
`;

const BackgroundSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  min-height: 55vh;
  padding: 2.5rem;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
    min-height: 45vh;
  }

  @media (max-width: 300px) {
    padding: 1rem;
    min-height: 40vh;
  }
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

  @media (max-width: 600px) {
    gap: 0.8rem;
  }

  @media (max-width: 300px) {
    gap: 0.6rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 300px) {
    font-size: 1.6rem;
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 300px) {
    font-size: 0.7rem;
  }
`;

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 1rem 0;

  @media (max-width: 900px) {
    gap: 2rem;
  }

  @media (max-width: 600px) {
    gap: 1.5rem;
  }

  @media (max-width: 300px) {
    gap: 1rem;
  }
`;

const MovieDetailContent = ({ movie, directorInfo, mainCast }) => {
  return (
    <Container>
      <BackgroundSection
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`
        }}
      >
        <BackdropOverlay />
        <DetailsContainer>
          <Heading>{movie?.title || '제목 정보가 없습니다.'}</Heading>
          <InfoText>원제: {movie?.original_title || '정보 없음'}</InfoText>
          <InfoText>개봉일: {movie?.release_date || '정보 없음'}</InfoText>
          <InfoText>평점: {movie?.vote_average ? `${movie.vote_average} / 10` : '평점 정보가 없습니다.'}</InfoText>
          <InfoText>상영 시간: {movie?.runtime ? `${movie.runtime}분` : '상영 시간 정보가 없습니다.'}</InfoText>
          <InfoText>태그라인: {movie?.tagline || 'N/A'}</InfoText>
          <InfoText>{movie?.overview || '줄거리 정보가 없습니다.'}</InfoText>
        </DetailsContainer>
      </BackgroundSection>

      <Heading>제작진 및 주요 출연진</Heading>
      <CastContainer>
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
        
        {mainCast && mainCast.length > 0 ? (
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

export default MovieDetailContent;
