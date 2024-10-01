import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #232649;
    padding: 20px;
`;

const MovieList = ({ movie2 }) => {
    return (
        <ListContainer>
            {movie2.results.map((item) => (
                <MovieCard
                    key={item.id}
                    title={item.title}
                    vote_average={item.vote_average}
                    poster_path={item.poster_path}
                    overview={item.overview}  //상세설명추가
                />
            ))}
        </ListContainer>
    );
};

export default MovieList;
