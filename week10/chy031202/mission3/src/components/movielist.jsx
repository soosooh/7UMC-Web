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
        <Wrapp>
            <MovieLi className="movieLi">
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </MovieLi>
        </Wrapp>
    );
};

const Wrapp = styled.div `
display:flex;
justify-content:center;

`

const MovieLi = styled.ul `
list-style: none;
`

export default ListData;