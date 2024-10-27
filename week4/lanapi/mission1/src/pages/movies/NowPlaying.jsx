import MovieCard from "../../components/MovieCard";
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardContainer from '../../components/CardContainer';

const Token = "Bearer mytoken";

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`, {
                    headers: {
                        Authorization: Token,
                    }
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error("화면을 불러올 수 없습니다. 주소를 확인해주세요:", error);
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
                    overview={movie.overview}  // 줄거리 추가
                />
            ))}
        </CardContainer>
    );
};

export default NowPlaying;
