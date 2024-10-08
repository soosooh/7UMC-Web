import React, { useEffect, useState } from 'react';

import axios from "axios";
import ListData from '../../components/movielist.jsx';

const PalyingComponent = () => {
    const [movies, setMovies] = useState({ results: [] });

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1`, {
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODlkNzI1YjY3OWExZmUxY2I2YjViZDY1OTQyYmVjNiIsIm5iZiI6MTcyODIxMTgyNC4xOTI4MDUsInN1YiI6IjY3MDI0MTVmYjE0NjI4MmY3Yjg1ODI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nAkDyhfOrwiSEvJ8JSsFXcVRzStV7GlT6fAsixBrTqk"
                }
            })
            setMovies(movies);

        }
        getMovies()
    }, []);

    return ( 
        <div>
            <ListData movies = {movies}/>
        </div>  
    );
}

export default PalyingComponent ;
