
import React from 'react';
import MovieList from './components/MovieList';
import { MovieData } from './mocks/movies'; 

const App = () => {
    return (
        <>
            <MovieList movie2={MovieData} />
        </>
    );
};

export default App;
