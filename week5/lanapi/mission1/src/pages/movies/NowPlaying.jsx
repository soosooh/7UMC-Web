// import MovieCard from "../../components/MovieCard";
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import CardContainer from '../../components/CardContainer';

// const Token = "Bearer my Token";

// const NowPlaying = () => {
//     const [movies, setMovies] = useState([]);
    
//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`, {
//                     headers: {
//                         Authorization: Token,
//                     }
//                 });
//                 setMovies(response.data.results);
//             } catch (error) {
//                 console.error("화면을 불러올 수 없습니다. 주소를 확인해주세요:", error);
//             }
//         };
//         getMovies();
//     }, []);
    
//     return (
//         <CardContainer>
//             {movies.map((movie) => (
//                 <MovieCard 
//                     key={movie.id}
//                     movieId={movie.id}
//                     posterPath={movie.poster_path}
//                     title={movie.title}
//                     releaseDate={movie.release_date}
//                     overview={movie.overview}  // 줄거리 추가
//                 />
//             ))}
//         </CardContainer>
//     );
// };

// export default NowPlaying;

// import MovieCard from "../../components/MovieCard";
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import CardContainer from '../../components/CardContainer';

// // .env 파일에서 API 토큰을 불러옴
// const Token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

// const NowPlaying = () => {
//     const [movies, setMovies] = useState([]);
    
//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`, {
//                     headers: {
//                         Authorization: Token,
//                     }
//                 });
//                 setMovies(response.data.results);
//             } catch (error) {
//                 console.error("화면을 불러올 수 없습니다. 주소를 확인해주세요:", error);
//             }
//         };
//         getMovies();
//     }, []);
    
//     return (
//         <CardContainer>
//             {movies.map((movie) => (
//                 <MovieCard 
//                     key={movie.id}
//                     movieId={movie.id}
//                     posterPath={movie.poster_path}
//                     title={movie.title}
//                     releaseDate={movie.release_date}
//                     overview={movie.overview}  // 줄거리 추가
//                 />
//             ))}
//         </CardContainer>
//     );
// };

// export default NowPlaying;

// src/pages/movies/NowPlaying.jsx
// import { useState, useEffect } from 'react';
// import MovieCard from '../../components/MovieCard';
// import CardContainer from '../../components/CardContainer';
// import API from '../../api/axios'; // src/api/axios.js에서 axios 인스턴스 불러오기

// const NowPlaying = () => {
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//                 const response = await API.get('movie/now_playing', {
//                     params: {
//                         page: 1, // 페이지 설정
//                     },
//                 });
//                 setMovies(response.data.results);
//             } catch (error) {
//                 setError('영화 데이터를 불러오는데 실패했습니다.');
//                 console.error('Error fetching movies:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         getMovies();
//     }, []);

//     if (loading) return <div>로딩 중...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <CardContainer>
//             {movies.map((movie) => (
//                 <MovieCard 
//                     key={movie.id}
//                     movieId={movie.id}
//                     posterPath={movie.poster_path}
//                     title={movie.title}
//                     releaseDate={movie.release_date}
//                     overview={movie.overview}
//                 />
//             ))}
//         </CardContainer>
//     );
// };

// export default NowPlaying;

import React from 'react';
import MovieCard from '../../components/MovieCard';
import CardContainer from '../../components/CardContainer';
import useFetch from '../../hooks/UseFetch'; // useFetch 훅 불러오기

const NowPlaying = () => {
    const { data: movies, isLoading, isError } = useFetch('movie/now_playing');

    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

    return (
        <CardContainer>
            {movies?.results.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    movieId={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                />
            ))}
        </CardContainer>
    );
};

export default NowPlaying;
