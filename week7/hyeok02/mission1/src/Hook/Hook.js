import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovies = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${url}?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer ${apikey}`,
            },
          }
        );
        setData(response.data);  
      } catch (error) {
        setError('영화를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, apikey]);

  return { data, loading, error }; 
};

export default useFetchMovies;
