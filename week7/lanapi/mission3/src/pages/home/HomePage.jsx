import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import Pagination from '../../components/pagination/pagination';

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
            setMovies(response.data.results.slice(0, 16));
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
            <Pagination
                page={page}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
            />
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffffffff;
    color: black;
    overflow-x: hidden;
    width: 100%;
`;

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1600px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`;

