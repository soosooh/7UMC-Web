import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchMovieDetail, fetchMovieCredits } from '../../api/movieApi';
import useMovieDetail from '../../hooks/useMovieDetail';
import { Container } from '../../styles/commonStyles';

const MovieHeader = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

const MoviePoster = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8));
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  color: white;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const MetaItem = styled.p`
  margin: 0;
`;

const Overview = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin-top: 20px;
`;

const CreditsSection = styled.div`
  margin: 40px;
`;

const CreditsTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const CreditsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 20px;
`;

const CreditCard = styled.div`
  text-align: center;
  min-width: 80px;
`;

const CreditImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 8px;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-color: #333;
`;

const CreditName = styled.p`
  color: white;
  font-size: 12px;
  margin-bottom: 4px;
`;

const CreditRole = styled.p`
  color: #888;
  font-size: 11px;
`;

const MovieDetail = () => {
  const { movieId } = useParams();
  const { movieData, credits, component } = useMovieDetail(
    movieId,
    fetchMovieDetail,
    fetchMovieCredits
  );

  if (component) return component;

  return (
    <div>
      <MovieHeader>
        <MoviePoster>
          <PosterImage 
            src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
            alt={movieData.title}
          />
        </MoviePoster>
        <MovieInfo>
          <Title>{movieData.title}</Title>
          <MetaInfo>
            <MetaItem>평점: {movieData.vote_average?.toFixed(1)}</MetaItem>
            <MetaItem>{movieData.release_date}</MetaItem>
            <MetaItem>러닝타임: {movieData.runtime}분</MetaItem>
          </MetaInfo>
          <Overview>{movieData.overview}</Overview>
        </MovieInfo>
      </MovieHeader>

      <CreditsSection>
        <CreditsTitle>감독/출연</CreditsTitle>
        <CreditsGrid>
          {credits.cast.map(person => (
            <CreditCard key={person.id}>
              <CreditImage 
                bgUrl={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                    : 'https://via.placeholder.com/200x200'
                }
              />
              <CreditName>{person.name}</CreditName>
              <CreditRole>{person.character}</CreditRole>
            </CreditCard>
          ))}
        </CreditsGrid>
      </CreditsSection>
    </div>
  );
};

export default MovieDetail;