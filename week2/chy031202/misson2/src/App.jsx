import './App.css'

import React, { useEffect, useState } from 'react';
import { MOVIES } from '../mocks/movies'

function MovieList({ movies }) {
  return (
    <div>
      <ul className = 'movieLi'>
        {movies.results.map(movie => (
          <li key={movie.id} style={{ listStyle: 'none' }}>
            <div>
              <img className='poster'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width='194px'
                height='251.59px'
              />
              <div className='docs'>
                <span className='title'>{movie.title}</span>
                <span className='review'>{movie.vote_average}</span>
              </div>

              <p className='overview' >
                {movie.overview}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



function App() {


  return (
    <>
      <MovieList movies={MOVIES} />
    </>
  )
}

export default App
