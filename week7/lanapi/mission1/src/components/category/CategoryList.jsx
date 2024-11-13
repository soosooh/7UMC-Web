
import React from 'react';
import MovieCard from '../movies/MovieCard';
import CardContainer from '../movies/CardContainer';

const CategoryList = ({ moviesData }) => {
    return (
        <CardContainer>
            {moviesData?.results.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    movieId={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                />
            ))}
        </CardContainer>
    );
};

export default CategoryList;

