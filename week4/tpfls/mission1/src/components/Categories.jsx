import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../mocks/movie'; 


import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; 

const Categories = () => {
    const location = useLocation();
    const excludedPaths = ['/login', '/signup'];

    if (excludedPaths.includes(location.pathname)) {
        return null; 
    }

    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState(''); 
    const [showMovies, setShowMovies] = useState(false); 
    const [hoveredMovieId, setHoveredMovieId] = useState(null); 

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

    const handleCardClick = (category) => {
        setCategory(category); 
        setShowMovies(true); 
    };

    return (
        <Container>
            {!showMovies && <Title>카테고리</Title>}
            <CategoryGrid style={{ display: showMovies ? 'none' : 'grid' }}>
                <CategoryCard onClick={() => handleCardClick('nowplaying')}>
                    <Image src={image1} alt="현재 상영중" />
                    <TextBox>현재 상영중</TextBox>
                </CategoryCard>
                <CategoryCard onClick={() => handleCardClick('popular')}>
                    <Image src={image2} alt="인기있는" />
                    <TextBox>인기있는</TextBox>
                </CategoryCard>
                <CategoryCard onClick={() => handleCardClick('toprated')}>
                    <Image src={image3} alt="높은 평가를 받은" />
                    <TextBox>높은 평가를 받은</TextBox>
                </CategoryCard>
                <CategoryCard onClick={() => handleCardClick('upcoming')}>
                    <Image src={image4} alt="개봉 예정인" />
                    <TextBox>개봉 예정인</TextBox>
                </CategoryCard>
            </CategoryGrid>

            {/* 선택된 카테고리의 영화 목록 표시 */}
            {showMovies && movies.length > 0 && (
                <MoviesList>
                    {movies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            onMouseEnter={() => setHoveredMovieId(movie.id)} 
                            onMouseLeave={() => setHoveredMovieId(null)} 
                        >
                            <MovieImage src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
                            <MovieTitle>{movie.title}</MovieTitle>
                            <ReleaseDate>{movie.release_date}</ReleaseDate> {/* 개봉일 추가 */}
                            {hoveredMovieId === movie.id && ( 
                                <Description>{movie.overview}</Description>
                            )}
                        </MovieCard>
                    ))}
                </MoviesList>
            )}
        </Container>
    );
};

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

const CategoryCard = styled.div`
    background-color: #D9D9D9; 
    border-radius: 10px; 
    padding: 30px; 
    text-align: center; 
    height: 125px; 
    position: relative; 
    cursor: pointer; 
`;

const Image = styled.img`
    width: 100%; 
    height: auto; 
    border-radius: 10px; 
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: -1; 
`;

const TextBox = styled.div`
    background-color: rgba(0, 0, 0, 0.3); 
    border-radius: 5px; 
    padding: 5px 0px; 
    color: white; 
    font-weight: bold; 
    display: inline-block; /
    position: absolute; 
    bottom: 10px; 
    left: 10px; 
    width: 140px; 
    height: 25px; 
    text-align: center;
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
    width: 80%; 
    margin: 0 auto; 
    position: relative; 
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

const Description = styled.div`
    position: absolute; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    background-color: rgba(0, 0, 0, 0.8); 
    color: white; 
    padding: 10px; 
    text-align: center; 
    font-size: 0.8rem; 
`;

export default Categories;