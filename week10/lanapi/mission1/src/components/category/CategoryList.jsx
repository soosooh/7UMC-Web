//반응형 1차 수정 완료
//페이징 추가

import React, { useState } from 'react';
import MovieCard from '../movies/MovieCard';
import CardContainer from '../movies/CardContainer';

const CategoryList = ({ moviesData }) => {
    const [currentPage, setCurrentPage] = useState(1); 
    const moviesPerPage = 18;  

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = moviesData?.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <>
            <CardContainer>
                {currentMovies?.map((movie) => (
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
        </>
    );
};

export default CategoryList;

