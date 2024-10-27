import styled from "styled-components";

const MovieImageWrapper = styled.div`
  width: 100vw;
  height: 500px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-image: url(${props => props.backImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 33%,   
    rgba(0, 0, 0, 0.4) 66%, 
    rgba(0, 0, 0, 0) 100%    
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`;

const BannerContent = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  max-width: 500px;  
  
`;

const Title = styled.h2`
  font-size: 43px; /* 제목 크기 5px 줄임 */
  margin-bottom: 8px; /* 간격 20% 줄임 */
  text-content: left;
`;

const Rate = styled.p`
  font-size: 19px; /* 평점 크기 5px 줄임 */
  margin-bottom: 8px; /* 간격 20% 줄임 */
`;

const YearAndRuntime = styled.p`
  font-size: 15px; /* 개봉 연도 및 러닝타임 크기 5px 줄임 */
  margin-bottom: 8px; /* 간격 20% 줄임 */
`;

const Slogan = styled.p`
  font-size: 25px; /* 슬로건 크기 5px 줄임 */
  font-style: italic;
  margin-bottom: 16px; /* 간격 20% 줄임 */
`;

const Overview = styled.p`
  font-size: 13px; /* 줄거리 크기 5px 줄임 */
  margin-top: 16px; /* 간격 20% 줄임 */
  text-align: left;

`;

const MovieDetailBanner = ({ movie }) => {
  return (
    <MovieImageWrapper backImg={movie?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : "#" }>
      <Overlay>
        <BannerContent>
          <Title>{movie?.title}</Title>
          <Rate>평점: {movie?.vote_average}</Rate>
          <YearAndRuntime>개봉연도: {movie?.release_date?.substring(0, 4)} | 러닝타임: {movie?.runtime}분</YearAndRuntime>
          <Slogan>{movie?.tagline}</Slogan>
          <Overview>{movie?.overview}</Overview>
        </BannerContent>
      </Overlay>
    </MovieImageWrapper>
  );
};

export default MovieDetailBanner;
