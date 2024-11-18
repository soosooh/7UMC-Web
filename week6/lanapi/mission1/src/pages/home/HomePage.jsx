import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const API_URL = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;
    // const token = '디버깅용';

 useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: token
                    }
                });
                setMovies(response.data.results); // 영화 목록 설정
            } catch (error) {
                console.error('영화 데이터를 가져오는데 실패했습니다:', error);
            }
        };
        
        fetchMovies();
    }, []);

    return (
        <Container>
            <WhiteHeading>홈 화면</WhiteHeading>
            <MoviesGrid>
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
            </MoviesGrid>
        </Container>
    );
};

export default HomePage;

// 스타일 컴포넌트 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #fffffff;
    color: white;
`;

const WhiteHeading = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
`;
