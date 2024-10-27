import { useState, useEffect } from 'react';
import { Container } from '../styles/commonStyles';

const useMovies = (fetchFunction) => {
  const [movies, setMovies] = useState([]);  // 빈 배열로 초기화
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState({ component: null });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction();
        setMovies(response.data.results || []);  // results가 없을 경우 빈 배열
        setError(null);
        setStatus({ component: null });
      } catch (err) {
        const errorMessage = err.message || '영화 데이터를 불러오는데 실패했습니다.';
        setError(errorMessage);
        setStatus({ component: <Container>{errorMessage}</Container> });
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchFunction]);

  if (loading) {
    return {
      movies: [],
      component: <Container>로딩 중...</Container>
    };
  }

  if (error) {
    return {
      movies: [],
      component: status.component
    };
  }

  return {
    movies,
    component: null
  };
};

export default useMovies;