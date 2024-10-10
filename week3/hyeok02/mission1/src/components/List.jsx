import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './Item';

const Container = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const List = ({ url }) => {
  const [movies, setMovies] = useState([]);
  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${url}?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer ${apikey}`,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('영화를 불러오지 못했습니다.', error);
      }
    };
    
    fetchMovies();
  }, [url, apikey]);

  return (
    <Container>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired,
};

export default List;
