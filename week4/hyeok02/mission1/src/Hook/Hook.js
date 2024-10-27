import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        setError('영화를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url, apikey]);

  return { movies, loading, error };
};

export default useFetchMovies;
