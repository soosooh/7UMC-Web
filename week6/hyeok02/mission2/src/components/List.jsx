import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './Item';
import axios from 'axios';

const Container = styled.div`
  width: calc(100vw - 180px);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const List = ({ url, movies: propMovies, showNoResults = true, loading }) => {
  const [movies, setMovies] = useState(propMovies || []);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!propMovies && url) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/${url}`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          });
          setMovies(response.data.results);
        } catch (err) {
          setError('영화 데이터를 불러오는 중 오류가 발생했습니다.');
        }
      };

      fetchMovies();
    } else if (propMovies) {
      setMovies(propMovies);
    }
  }, [url, propMovies]);

  if (loading) {
    return (
      <Container>
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieItem key={index} isLoading={true} />
        ))}
      </Container>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movies || movies.length === 0) {
    return showNoResults ? <p>No results found.</p> : null;
  }

  return (
    <Container>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

List.propTypes = {
  url: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
  showNoResults: PropTypes.bool,
  loading: PropTypes.bool,
};

export default List;
