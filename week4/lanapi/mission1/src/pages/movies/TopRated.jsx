import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import CardContainer from '../../components/CardContainer';
import axios from 'axios';

const Token = "Bearer mytoken";

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', {
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

export default TopRated;
