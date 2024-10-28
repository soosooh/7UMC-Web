import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ title, movies, loading, error }) => {
    const navigate = useNavigate();
    const [hoveredMovieId, setHoveredMovieId] = useState(null); // 현재 마우스 오버된 영화 ID 상태

    const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`);
    };

    if (loading) return <LoadingMessage>로딩 중...</LoadingMessage>;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;

    return (
        <Container>
            <Title>{title}</Title>
            <MovieGrid>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        onClick={() => handleMovieClick(movie.id)}
                        onMouseEnter={() => setHoveredMovieId(movie.id)} // 마우스 오버 시 영화 ID 설정
                        onMouseLeave={() => setHoveredMovieId(null)} // 마우스 나가면 ID 초기화
                        role="button" // 접근성 향상
                        tabIndex={0} // 키보드 접근성
                    >
                        <Poster src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <MovieInfo>
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date}</p>
                        </MovieInfo>
                        {hoveredMovieId === movie.id && (
                            <Description>{movie.overview}</Description>
                        )}
                    </MovieCard>
                ))}
            </MovieGrid>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    padding: 30px;
    color: white;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: white;
`;

const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
`;

const MovieCard = styled.div`
    background-color: #1e1e1e;
    border-radius: 8px;
    overflow: hidden;
    position: relative; 
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

const Poster = styled.img`
    width: 100%;
    height: 225px;
    object-fit: cover;
`;

const MovieInfo = styled.div`
    padding: 10px;
    text-align: center;

    h2 {
        font-size: 1rem;
        margin: 10px 0 5px;
    }

    p {
        font-size: 0.9rem;
        color: #bbb;
    }
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
    opacity: 0.9; 
`;

const LoadingMessage = styled.p`
    text-align: center;
    color: white;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

export default MovieList;
