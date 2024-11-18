import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MovieDescription from './MovieDescription';

const MovieItemContainer = styled.div`
  position: relative;
  width: 171px;
  height: 329px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;

  &:hover .movie-description {
    opacity: 1;
  }
`

const MoviePoster = styled.img`
  width: 171px;
  height: 251.59px;
  border-radius: 10px 10px 0 0;
  display: block;
`

const MovieInfo = styled.div`
  width: 171px;
  height: 77.41px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  color: #fff;
  box-sizing: border-box;
  padding: 0.5rem 0;
  gap: 0.25rem;
`

const MovieTitle = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
`

const MovieDate = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
`

const MovieItem = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  }

  return (
    <MovieItemContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDate>{movie.release_date}</MovieDate>
      </MovieInfo>

      {isHovered && (
        <MovieDescription overview={movie.overview} />
      )}
    </MovieItemContainer>
  );
};

export default MovieItem;
