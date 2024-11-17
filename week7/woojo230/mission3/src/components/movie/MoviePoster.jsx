import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw; /* 화면을 넘어가지 않도록 제한 */
  height: 20vw;
  overflow: hidden;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 100vw; /* 모바일 화면에서 가로를 꽉 채우기 */
    height: 50vw; /* 비율에 맞게 높이 조정 */
    border-radius: 0; /* 모바일에서는 모서리 둥글기 제거 */
  }
`;

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8));
  color: #fff;

  @media (max-width: 768px) {
    width: 100vw;
    height: 50vw;
    border-radius: 0;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Rate = styled.p`
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Years = styled.p`
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const RunTime = styled.p`
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TagLine = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  margin: 12px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const OverView = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 10px 0 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
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
