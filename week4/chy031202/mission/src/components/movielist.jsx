import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import MovieID from "../pages/movies/movieId";
import MovieItem from "./movie-item";


const ListData = ({ movies }) => {
    return (
        <>
            <MovieLi className="movieLi">
                {movies.data?.results.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </MovieLi>
        </>
    );
};

const MovieLi = styled.ul `
list-style: none;
overflow-y: auto; /* 수직 스크롤 활성화 */
`

export default ListData;