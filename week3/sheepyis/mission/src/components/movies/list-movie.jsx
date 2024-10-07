import { useEffect, useState } from "react";
import { API } from "../../api/axios";
import styled from "styled-components";
import ItemMovie from "./item-movie";

const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
`

const ListMovie = ({ url }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await API.get(url);
                setMovies(response.data.results);
                //console.log(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMovies();
    }, [url]);

    return (
        <ListContainer>
            {movies.map(movie => (
                <ItemMovie 
                    key={movie.id} 
                    title={movie.title}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    date={movie.release_date}
                    overview={movie.overview}
                /> 
            ))}
        </ListContainer>
    )
}

export default ListMovie;