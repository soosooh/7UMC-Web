// import { useState, useEffect } from 'react';
// import MovieCard from '../../components/MovieCard';
// import CardContainer from '../../components/CardContainer';
// import axios from 'axios';

// const Token = "My Token";

// const Popular = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//                 const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', {
//                     headers: {
//                         Authorization: Token,
//                     }
//                 });
//                 setMovies(response.data.results);
//             } catch (error) {
//                 console.error('화면을 불러올 수 없습니다. 주소를 확인해주세요:', error);
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
//                     overview={movie.overview}  
//                 />
//             ))}
//         </CardContainer>
//     );
// };

// export default Popular;

import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import CardContainer from '../../components/CardContainer';
import axios from 'axios';

// .env 파일에서 API 토큰을 불러옴
const Token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

const Popular = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', {
                    headers: {
                        Authorization: Token,
                    }
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('화면을 불러올 수 없습니다. 주소를 확인해주세요:', error);
            }
        };
        getMovies();
    }, []);

    return (
        <CardContainer>
            {movies.map((movie) => (
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

export default Popular;
