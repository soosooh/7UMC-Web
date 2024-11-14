import React from 'react';
import styled from 'styled-components';

const PosterDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 50vh;
  border-radius: 10px;
  padding: 3rem;
  background-image: ${(props) => props.$backgroundImage ? `url(${props.$backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1;
  border-radius: 10px;
`
const InfoDiv = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex:1;
`
const TitleP = styled.p`
  font-family: Inter;
  font-size: 2rem;
  font-weight: 800;
  line-height: 24.2px;
`
const DetailP = styled.p`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 16.94px;
`
const OriginalTitleP = styled(DetailP)`
  margin-bottom: 1.5rem;
`
const OverviewP = styled(DetailP)`
  margin-top: auto;
`

const MovieDetailBanner = ({ movie }) => {
  return (
    <PosterDiv $backgroundImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
      <Overlay />
      <InfoDiv>
        <TitleP>{movie.title}</TitleP>
        <OriginalTitleP>{movie.original_title}</OriginalTitleP>
        <DetailP>{movie.release_date}</DetailP>
        <DetailP>평균 {movie.vote_average}</DetailP>
        <DetailP>{movie.runtime}분</DetailP>
        <DetailP>{movie.tagline}</DetailP>
        <OverviewP>{movie.overview}</OverviewP>
      </InfoDiv>
    </PosterDiv>
  );
};

export default MovieDetailBanner;