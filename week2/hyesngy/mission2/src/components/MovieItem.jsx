import React, { useState } from 'react';

const MovieItem = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="movie-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
            />
            <div className='movie-info'>
                <p>{movie.title}</p>
                <p>{movie.vote_average}</p>
            </div>

            {isHovered && (
                <div className="movie-description">
                    <p>{movie.overview}</p>
                </div>
            )}
        </div>
    );
};

export default MovieItem;
