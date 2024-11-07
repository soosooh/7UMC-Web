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
  object-fit: cover; /* 이미지가 영역에 맞게 채워지도록 설정 */
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
  //   console.log(moviesData);

  return (
    <MainContainer>
      <PosterImg
        src={`https://image.tmdb.org/t/p/w500${moviesData.data?.backdrop_path}`}
        // backdrop_path를 읽으려고 할 때 moviesData가 undefined이거나 null인 상황이 발생 ->
        // MoviePoster 컴포넌트가 렌더링될 때 moviesData가 아직 로드되지 않았기 때문에 발생하는 문제
        // 따라서 조건부 랜더링 추가
      />
      <MovieText>
        <Title>{moviesData.data?.title}</Title>
        <Rate> 평균 {moviesData.data?.vote_average}</Rate>
        <Years>{moviesData.data?.release_date}</Years>
        <RunTime>{moviesData.data?.runtime}분</RunTime>
        <TagLine>{moviesData.data?.tagline}</TagLine>
        <OverView>{moviesData.data?.overview}</OverView>
      </MovieText>
    </MainContainer>
  );
};

export default MoviePoster;
