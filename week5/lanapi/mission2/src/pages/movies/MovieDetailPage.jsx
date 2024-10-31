 
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import MovieDetailBanner from '../../components/movies/MovieDetailBanner';
// import styled from 'styled-components';

// const Token = "Bearer my Token";
// const MovieDetailPage = () => {
//     const { movieId } = useParams(); // movieId 파라미터 가져오기
//     const [movie, setMovie] = useState(null);
//     const [credits, setCredits] = useState({ cast: [], crew: [] });

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=ko`, {
//                     headers: {
//                         Authorization: Token,
//                     }
//                 });
//                 setMovie(movieResponse.data);

//                 const creditResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
//                     headers: {
//                         Authorization: Token,
//                     }
//                 });
//                 setCredits(creditResponse.data);

//             } catch (error) {
//                 console.error('화면을 불러올 수 없습니다. 주소를 다시 확인해주세요.', error);
//             }
//         };
//         fetchMovieDetails();
//     }, [movieId]);

//     if (!movie || !credits) return <div style={styles.loading}>Loading...</div>;

//     const director = credits.crew.find(member => member.job === 'Director');
//     const topCast = credits.cast.slice(0, 20); 

//     return (
//         <div style={styles.container}>
//             <MovieDetailBanner movie={movie} />

//             <CastTitle>Directed by / Starring</CastTitle>

//             <CreditWrapper>
//                 {director && (
//                     <CreditItem>
//                         <CreditImage src={`https://image.tmdb.org/t/p/w500${director.profile_path}`} alt={director.name} />
//                         <CreditName>{director.name}</CreditName>
//                         <CreditRole>감독</CreditRole>
//                     </CreditItem>
//                 )}
//                 {topCast.map((actor) => (
//                     <CreditItem key={actor.cast_id}>
//                         <CreditImage src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
//                         <CreditName>{actor.name}</CreditName>
//                         <CreditRole>{actor.character}</CreditRole>
//                     </CreditItem>
//                 ))}
//             </CreditWrapper>
//         </div>
//     );
// };

// const CastTitle = styled.h2`
//   font-size: 40px;
//   margin: 40px 0 40px 0; 
//   text-align: left;
//   color: white;
//   font-family: 'Georgia', serif;
// `;

// const CreditWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   max-width: 100%;
//   gap: 20px;
//   box-sizing: border-box;
//   justify-content: flex-start; 
// `;

// const CreditItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center; 
//   width: calc(10% - 40px); 
//   flex-basis: calc(10% - 40px); 
// `;

// const CreditImage = styled.img`
//     width: 120px;
//     height: 120px;
//     border-radius: 50%;
//     object-fit: cover;
//     background-color: black;
//     display: block;
//     border: 2px solid white;
//     margin-bottom: 10px;
// `;

// const CreditName = styled.p`
//   font-size: 14px;
//   color: white;
//   margin: 5px 0 3px 0;
//   text-align: center;
// `;

// const CreditRole = styled.p`
//   font-size: 12px;
//   color: #ccc;
//   margin: 0;
//   text-align: center;
//   font-style: italic;
// `;

// const styles = {
//     container: {
//         color: 'white',
//         backgroundColor: '#00000',
//         padding: '20px',
//         textAlign: 'center',
//     },
//     loading: {
//         color: 'white',
//         textAlign: 'center',
//         marginTop: '50px',
//     }
// };

// export default MovieDetailPage;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// .env에서 API 토큰을 불러옴
const Token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

const MovieDetailPage = () => {
    const { movieId } = useParams(); // movieId 파라미터 가져오기
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState({ cast: [], crew: [] });

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                // 하나의 요청으로 영화 세부 정보와 출연진 데이터를 모두 가져옴
                const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                    headers: {
                        Authorization: Token,
                    },
                    params: {
                        append_to_response: 'credits', // credits 데이터를 함께 가져옴
                    }
                });
                setMovie(movieResponse.data);
                setCredits(movieResponse.data.credits);

            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (!movie || !credits) return <div style={styles.loading}>Loading...</div>;

    const director = credits.crew.find(member => member.job === 'Director');
    const topCast = credits.cast.slice(0, 20); // 상위 20명의 출연진만 표시

    return (
        <div style={styles.container}>
            {/* 배너 부분 통합 */}
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

            <CastTitle>Directed by / Starring</CastTitle>

            <CreditWrapper>
                {director && (
                    <CreditItem>
                        <CreditImage src={`https://image.tmdb.org/t/p/w500${director.profile_path}`} alt={director.name} />
                        <CreditName>{director.name}</CreditName>
                        <CreditRole>감독</CreditRole>
                    </CreditItem>
                )}
                {topCast.map((actor) => (
                    <CreditItem key={actor.cast_id}>
                        <CreditImage src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                        <CreditName>{actor.name}</CreditName>
                        <CreditRole>{actor.character}</CreditRole>
                    </CreditItem>
                ))}
            </CreditWrapper>
        </div>
    );
};

// 배너와 오버레이 스타일 통합
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
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 500px;  
`;

const Title = styled.h2`
  font-size: 43px;
  margin-bottom: 8px;
  text-align: left;
`;

const Rate = styled.p`
  font-size: 19px;
  margin-bottom: 8px;
`;

const YearAndRuntime = styled.p`
  font-size: 15px;
  margin-bottom: 8px;
`;

const Slogan = styled.p`
  font-size: 25px;
  font-style: italic;
  margin-bottom: 16px;
`;

const Overview = styled.p`
  font-size: 13px;
  margin-top: 16px;
  text-align: left;
`;

// 캐스트 관련 스타일
const CastTitle = styled.h2`
  font-size: 40px;
  margin: 40px 0 40px 0; 
  text-align: left;
  color: white;
  font-family: 'Georgia', serif;
`;

const CreditWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 20px;
  box-sizing: border-box;
  justify-content: flex-start; 
`;

const CreditItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: calc(10% - 40px); 
  flex-basis: calc(10% - 40px); 
`;

const CreditImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    background-color: black;
    display: block;
    border: 2px solid white;
    margin-bottom: 10px;
`;

const CreditName = styled.p`
  font-size: 14px;
  color: white;
  margin: 5px 0 3px 0;
  text-align: center;
`;

const CreditRole = styled.p`
  font-size: 12px;
  color: #ccc;
  margin: 0;
  text-align: center;
  font-style: italic;
`;

const styles = {
    container: {
        color: 'white',
        backgroundColor: '#333',
        padding: '20px',
        textAlign: 'center',
    },
    loading: {
        color: 'white',
        textAlign: 'center',
        marginTop: '50px',
    }
};

export default MovieDetailPage;
