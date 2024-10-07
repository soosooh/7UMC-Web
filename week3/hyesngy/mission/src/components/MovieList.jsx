import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const ListContainer = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;  
`
const MovieList = ({ listType }) => {
    const [movies, setMovies] = useState([]);
    const accessToken = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/${listType}?language=ko-KR&page=1`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            setMovies(movies);
        }
        getMovies();
    }, [listType]);

    return (
        <ListContainer>
            {movies.data?.results.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </ListContainer>
    );
};

MovieList.propTypes = {
    listType: PropTypes.string.isRequired,
};

export default MovieList;
