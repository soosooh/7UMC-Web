/*
import MovieCard from "../../components/MovieCard";
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardContainer from '../../components/CardContainer';

const Token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTYzYzUwZGQwMjI5Y2ViMDUyZGM5ZTNlMGRlOWEyNSIsIm5iZiI6MTcyODI4ODY3NC4zNTAxNDEsInN1YiI6IjY2ZmViY2JhYzlhMTBkNDZlYTdjOWQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hiJR7nmiA0-Hbx5nJuALWjUN0IzIMpWtGzKXplLYSYw";

const UpComing = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1`,
                    {
                        headers: {
                            Authorization: Token,
                        }
                    }
                );
                setMovies(response.data.results);
                setError(null);
            } catch (error) {
                console.error("영화 데이터를 가져오는 데 실패했습니다:", error);
                setError("영화 데이터를 불러오는 데 문제가 발생했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        getMovies();
    }, []);
    
    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <CardContainer>
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                />
            ))}
        </CardContainer>
    );
};

export default UpComing;
*/


import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import CardContainer from '../../components/CardContainer';
import API from '../../api/axios';

const UpComing = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true);
                const response = await API.get('up_coming', {
                    params: { page: 1 }
                });
                setMovies(response.data.results);
                setError(null);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setError('Error fetching movie data');
            } finally {
                setIsLoading(false);
            }
        };
        getMovies();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <CardContainer>
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                />
            ))}
        </CardContainer>
    );
};

export default UpComing;
