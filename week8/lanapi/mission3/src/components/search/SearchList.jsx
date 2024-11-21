
import React from 'react';
import SkeletonCard from './SkeletonCard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchList = ({ data, isLoading }) => {
    const navigate = useNavigate(); 

    const handleCardClick = (movieId) => {
        navigate(`/movies/${movieId}`); 
    };

    return (
        <ResultsContainer>
            {isLoading ? (
                [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
            ) : (
                data?.results?.map((movie) => (
                    <StyledMovieCard
                        key={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        onClick={() => handleCardClick(movie.id)} 
                    />
                ))
            )}
        </ResultsContainer>
    );
};

export default SearchList;

const ResultsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 170.65px);
    grid-auto-rows: 260px;
    gap: 20px 30px;
    justify-content: start;
    padding: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(6, 170.65px);
        gap: 20px 25px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 170.65px);
        gap: 20px 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 170.65px);
        gap: 20px 15px;
    }
`;

const StyledMovieCard = ({ posterPath, title, releaseDate, onClick }) => {
    return (
        <CardContainer onClick={onClick}> 
            <MoviePoster src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
            <CardText>
                <MovieTitle>{title}</MovieTitle>
                <ReleaseDate>{releaseDate}</ReleaseDate>
            </CardText>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    position: relative;
    width: 170.65px;
    height: 260px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fffffffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer; 
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05); 
    }
`;

const MoviePoster = styled.img`
    width: 100%;
    height: 231.56px;
    background-color: #000000;
`;

const CardText = styled.div`
    padding: 10px;
    text-align: center;
`;

const MovieTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #ffff;
`;

const ReleaseDate = styled.div`
    font-size: 12px;
    color: #ffff;
    margin-top: 4px; 
`;
