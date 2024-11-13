import PropTypes from 'prop-types';
import styled from 'styled-components';

const PosterWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 21rem;
  overflow: hidden;
  border-radius: 1.25rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 15rem;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieInfoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 394px) {
    font-size: 1.3rem;
  }
`;

const Rating = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 394px) {
    font-size: 0.9rem;
  }
`;

const ReleaseDate = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
    
  @media (max-width: 394px) {
    font-size: 0.9rem;
  }
`;

const Runtime = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
    
  @media (max-width: 394px) {
    font-size: 0.9rem;
  }
`;

const Overview = styled.p`
  font-size: 1.1rem;
  max-width: 80%;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    max-width: 100%;
  }
`;


const Poster = ({ movie }) => (
  <PosterWrapper>
    <PosterImage src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
    <MovieInfoOverlay>
      <Title>{movie.title}</Title>
      <Rating>평균 {movie.vote_average}</Rating>
      <ReleaseDate>{new Date(movie.release_date).getFullYear()}</ReleaseDate>
      <Runtime>{movie.runtime}분</Runtime>
      <Overview>{movie.overview}</Overview>
    </MovieInfoOverlay>
  </PosterWrapper>
);

Poster.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default Poster;
