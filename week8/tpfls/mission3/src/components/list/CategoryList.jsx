import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryItem from '../Item/CategoryItem';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../../api/movie';

const CategoryList = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('');
    const [showMovies, setShowMovies] = useState(false);

    const handleCardClick = (category) => {
        setCategory(category);
        setShowMovies(true);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            let data;
            switch (category) {
                case 'nowplaying':
                    data = await fetchNowPlayingMovies();
                    break;
                case 'popular':
                    data = await fetchPopularMovies();
                    break;
                case 'toprated':
                    data = await fetchTopRatedMovies();
                    break;
                case 'upcoming':
                    data = await fetchUpcomingMovies();
                    break;
                default:
                    return;
            }
            setMovies(data.results);
        };

        if (showMovies) {
            fetchMovies();
        }
    }, [category, showMovies]);

    return (
        <Container>
            {!showMovies && <Title>카테고리</Title>}
            <CategoryGrid style={{ display: showMovies ? 'none' : 'grid' }}>
                <CategoryItem category="nowplaying" onClick={handleCardClick} altText="현재 상영중" />
                <CategoryItem category="popular" onClick={handleCardClick} altText="인기있는" />
                <CategoryItem category="toprated" onClick={handleCardClick} altText="높은 평가를 받은" />
                <CategoryItem category="upcoming" onClick={handleCardClick} altText="개봉 예정인" />
            </CategoryGrid>

            {showMovies && movies.length > 0 && (
                <MoviesList>
                    {movies.map(movie => (
                        <MovieCard key={movie.id}>
                            <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <MovieTitle>{movie.title}</MovieTitle>
                            <ReleaseDate>{movie.release_date}</ReleaseDate>
                        </MovieCard>
                    ))}
                </MoviesList>
            )}
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    background-color: black;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-top: 50px;
`;

const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-left: 20px;
    width: calc(100% - 40px);
`;

const MoviesList = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    width: 100%;
    margin-top: 20px;
    padding: 0 20px;
`;

const MovieCard = styled.div`
    background-color: black;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
`;

const MovieImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const MovieTitle = styled.div`
    padding: 5px;
    font-weight: bold;
    color: white;
`;

const ReleaseDate = styled.div`
    padding: 5px;
    font-size: 0.9rem;
    color: #bbb;
`;

export default CategoryList;
