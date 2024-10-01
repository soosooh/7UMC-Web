import React from 'react';
import MovieCard from './MovieCard';
import { MOVIES } from '../mocks/movies';

const MovieList = () => {
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '20px', // 행 사이의 간격
  };

  const cardWrapperStyle = {
    margin: '0 10px', // 카드 사이의 좌우 간격
  };

  const movies = MOVIES.results;

  return (
    <div style={listStyle}>
      {[...Array(Math.ceil(movies.length / 8))].map((_, rowIndex) => (
        <div key={rowIndex} style={rowStyle}>
          {movies.slice(rowIndex * 8, (rowIndex + 1) * 8).map((movie) => (
            <div key={movie.id} style={cardWrapperStyle}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieList;