import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import MovieID from "../pages/movies/movieId";
import MovieItem from "./movie-item";
import { useEffect } from "react";


const ListData = ({ movies }) => {

    // if (!movies?.data?.results || !Array.isArray(movies.data.results)) {
    //     // 데이터가 없거나 results가 배열이 아닌 경우
    //     return <div>검색 결과가 없습니다.</div>;
    // }

    useEffect(() => {
        if (movies) {
            console.log(movies.data);
        }
    }, [movies]);

    return (
        <>
            <MovieLi className="movieLi">
                {movies && movies?.data?.results?.map((movie) => (
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