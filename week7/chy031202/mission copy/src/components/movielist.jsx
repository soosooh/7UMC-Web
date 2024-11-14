import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import MovieID from "../pages/movies/movieId";
import MovieItem from "./movie-item";
import { useEffect } from "react";


const ListData = ({ movies }) => {

    useEffect(() => {
        if (movies) {
            console.log("Movies data:", movies);
        }
    }, [movies]);

    return (
        <>
            <MovieLi className="movieLi">
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </MovieLi>
        </>
    );
};

const MovieLi = styled.ul `
list-style: none;

max-height: 80vh;
`

export default ListData;