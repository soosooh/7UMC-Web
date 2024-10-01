import ListMovie from "../components/list/list-movie";
import { MOVIES } from "../mocks/movies";
import { useState, useEffect } from "react";

const Movie = () => {
    const [movieData, setMovieData] = useState({ results: [] });

    useEffect(() => {
        setMovieData(MOVIES);
    }, []);

    return (
        <div className="pageContainer">
            <ListMovie data={movieData} />
        </div>
    );
};


export default Movie;
