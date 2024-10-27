
// import styled from 'styled-components';

// const Banner = ({ backImg, title, tagline, voteAverage, releaseDate, runtime, overview }) => {
//     return (
//         <BannerContainer backImg={backImg}>
//             <Title>{title}</Title>
//             <Subtitle>{tagline}</Subtitle>
//             <Info>
//                 <Rate>평균 평점: {voteAverage}</Rate>
//                 <ReleaseDate>개봉연도: {new Date(releaseDate).getFullYear()}</ReleaseDate>
//                 <Runtime>러닝타임: {runtime}분</Runtime>
//             </Info>
//             <Description>{overview}</Description>
//         </BannerContainer>
//     );
// };

// export default Banner;

// const BannerContainer = styled.div`
//     background-image: url(${props => props.backImg});
//     background-size: cover;
//     background-position: center;
//     padding: 20px;
//     height: 320px;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     color: white;
// `;

// const Title = styled.h2`
//     font-size: 24px;
//     font-weight: bold;
// `;

// const Subtitle = styled.p`
//     font-size: 16px;
//     font-style: italic;
// `;

// const Info = styled.div`
//     display: flex;
//     gap: 20px;
//     margin-bottom: 10px;
// `;

// const Rate = styled.p`
//     font-size: 14px;
// `;

// const ReleaseDate = styled.p`
//     font-size: 14px;
// `;

// const Runtime = styled.p`
//     font-size: 14px;
// `;

// const Description = styled.p`
//     font-size: 14px;
//     margin-top: 10px;
// `;

import styled from "styled-components";

const Banner = styled.div`
  background-image: url(${props => props.backImg});
  padding: 16px 20px;
  background-repeat: no-repeat;
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Rate = styled.p`
  font-size: 16px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const MovieDetailBanner = ({ movie }) => {
  return (
    <Banner backImg={movie?.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : "#"}>
      <Title>{movie?.title}</Title>
      <Rate>평점: {movie?.vote_average}</Rate>
      <Subtitle>{movie?.overview}</Subtitle>
    </Banner>
  );
};

export default MovieDetailBanner;
