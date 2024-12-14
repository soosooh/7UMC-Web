import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 18.75%; // 56.25%를 3으로 나눈 값
  overflow: hidden;
  border-radius: 6px;

  @media (max-width: 768px) {
    padding-top: 33.33%; // 모바일에서는 좀 더 큰 비율 유지
    border-radius: 0;
  }
`;

const PosterImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  margin-right: 20px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center top;
`;

const MovieText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 60%,
    rgba(0, 0, 0, 0)
  );
  color: #fff;

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 60%,
      rgba(0, 0, 0, 0)
    );
  }
`;

const Title = styled.h1`
  font-size: 1.5rem; // 2rem에서 축소
  margin: 0;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TagLine = styled.p`
  font-style: italic;
  font-size: 1rem; // 1.2rem에서 축소
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Rate = styled.p`
  font-size: min(1rem, 2vw);
  margin: 0;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: min(0.9rem, 2.5vw);
  }
`;

const Years = styled(Rate)``;

const RunTime = styled(Rate)``;

const OverView = styled.p`
  font-size: 0.8rem; // 0.9rem에서 축소
  line-height: 1.3;
  margin: 8px 0 0;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const MoviePoster = ({ moviesData }) => {
  if (!moviesData) return null;

  return (
    <MainContainer>
      {moviesData.backdrop_path && (
        <PosterImg
          src={`https://image.tmdb.org/t/p/w500${moviesData.backdrop_path}`}
          alt={moviesData.title}
        />
      )}
      <MovieText>
        <Title>{moviesData.title}</Title>
        <Rate>평균 {moviesData.vote_average}</Rate>
        <Years>{moviesData.release_date}</Years>
        <RunTime>{moviesData.runtime}분</RunTime>
        <TagLine>{moviesData.tagline}</TagLine>
        <OverView>{moviesData.overview}</OverView>
      </MovieText>
    </MainContainer>
  );
};

export default MoviePoster;
