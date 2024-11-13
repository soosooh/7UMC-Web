import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';

const HomePage = () => {
    const [movies, setMovies] = useState([]); 
    const [page, setPage] = useState(1); 

    const API_URL = `https://api.themoviedb.org/3/movie/popular`;
    const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
    const fetchMovies = async (page) => {
        try {
            const response = await axios.get(API_URL, {
                headers: {
                    Authorization: token,
                },
                params: {
                    language: 'ko-KR',
                    page: page,
                },
            });
            setMovies(response.data.results.slice(0, 16)); // 한 페이지당 16개씩
        } catch (error) {
            console.error('영화 데이터를 가져오는데 실패했습니다:', error);
        }
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePreviousPage = () => {
        if (page > 1) setPage((prevPage) => prevPage - 1);
    };

    return (
        <Container>
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
            <PaginationControls>
                <Button onClick={handlePreviousPage} disabled={page === 1}>
                    이전
                </Button>
                <PageNumber>Page {page}</PageNumber>
                <Button onClick={handleNextPage}>다음</Button>
            </PaginationControls>
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffffffffff;
    color: black;
`;

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, auto);  
    gap: 20px;
    width: 100%;
    max-width: 1600px;
`;

const PaginationControls = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    position: fixed;
    bottom: 50px;   
    left: 50%;      
    transform: translateX(-50%); 
    background-color: #fffffffffff; 
    padding: 10px 20px;
    border-radius: 8px;
    z-index: 1000;
`;

const Button = styled.button`
    width: 227px;
    height: 35px;
    background: #FF073D;
    border: none;
    border-radius: 10px 0px 0px 0px;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    color: #FFFFFF;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-size: 1rem;
    transition: opacity 0.3s;

    &:hover {
        opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
    }
`;

const PageNumber = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: white;
`;
