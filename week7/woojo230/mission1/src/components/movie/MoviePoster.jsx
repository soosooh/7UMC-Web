import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 20vw;
  overflow: hidden;
  border-radius: 6px;
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
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-bottom: 10px;
`;

const Rate = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const Years = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const RunTime = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const TagLine = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  margin: 12px 0;
`;

const OverView = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 10px 0 0;
`;

const MoviePoster = ({ moviesData }) => {
  if (!moviesData) return null; // 데이터가 없을 경우 렌더링하지 않음

  return (
    <MainContainer>
      {moviesData.backdrop_path && <PosterImg src={`https://image.tmdb.org/t/p/w500${moviesData.backdrop_path}`} alt={moviesData.title} />}
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
