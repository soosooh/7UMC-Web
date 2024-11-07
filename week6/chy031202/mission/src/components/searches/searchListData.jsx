import styled from "styled-components";

import MovieItem from "../movie-item";


const SearchListData = ({ movies }) => {
    return (
        <>
            {/* <MovieLi className="movieLi">
                {movies?.results?.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </MovieLi> */}
        </>
    );
};

const MovieLi = styled.ul `
list-style: none;
overflow-y: auto; /* 수직 스크롤 활성화 */
`

export default SearchListData;