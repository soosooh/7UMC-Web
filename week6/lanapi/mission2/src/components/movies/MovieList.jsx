// src/components/movies/MovieList.jsx
import React from 'react';
// import useFetch from '../../hooks/useFetch';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const MovieGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const MovieList = ({ url }) => {
    const { data, isLoading, isError } = useFetch(url);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching movie data.</p>;

    return (
        <MovieGrid>
            {data && data.results.length > 0 ? (
                data.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        overview={movie.overview}
                    />
                ))
            ) : (
                <p>No movie information available.</p>
            )}
        </MovieGrid>
    );
};

export default MovieList;
