// MovieItem.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MovieItem = ({ movie, onMouseEnter, onMouseLeave, isHovered }) => {
    const navigate = useNavigate();

    const handleMovieClick = () => {
        navigate(`/movies/${movie.id}`);
    };

    return (
        <MovieCard
            onClick={handleMovieClick}
            onMouseEnter={() => onMouseEnter(movie.id)}
            onMouseLeave={onMouseLeave}
            role="button"
            tabIndex={0}
        >
            <Poster src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <MovieInfo>
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </MovieInfo>
            {isHovered && <Description>{movie.overview}</Description>}
        </MovieCard>
    );
};

// Styled Components
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

export default MovieItem;
