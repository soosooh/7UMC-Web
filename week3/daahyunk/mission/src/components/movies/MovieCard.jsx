import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieDetail from './MovieDetail';

const Card = styled.div`
  position: relative;
  width: 15vw;
  margin: 1vh;
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
  border-radius: 0.5vw;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5vw;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%; 
  background-color: #383B64;
  padding: 1vh;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

const Title = styled.h3`
  font-size: 1.8vh;
  margin: 0;
  padding-left: 1vw;
`;

const ReleaseDate = styled.p`
  font-size: 1.5vh;
  margin: 0;
  padding-left: 1vw;
  opacity: 0.8; 
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding: 2vh;
  color: white;
  text-align: left;
  z-index: 1;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  overflow-y: auto;
`;

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Info>
        <Title>{movie.title}</Title>
        <ReleaseDate>{movie.release_date}</ReleaseDate> 
      </Info>
      <Overlay isHovered={isHovered}>
        <MovieDetail title={movie.title} overview={movie.overview} />
      </Overlay>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string, 
  }).isRequired,
};

export default MovieCard;
