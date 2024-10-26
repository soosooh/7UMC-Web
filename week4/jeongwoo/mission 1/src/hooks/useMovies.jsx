import { useState, useEffect } from 'react';
import { Container } from '../styles/commonStyles';

const useMovies = (fetchFunction) => {
  // useState를 활용한 상태 관리
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState({ component: null });

  // useEffect를 활용한 데이터 fetching
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // 데이터 로딩 시작
        const response = await fetchFunction(); // API 호출
        setMovies(response.data.results);
        setError(null);
        setStatus({ component: null });
      } catch (err) {
        const errorMessage = err.message || '영화 데이터를 불러오는데 실패했습니다.';
        setError(errorMessage);
        setStatus({ component: <Container>{errorMessage}</Container> });
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchMovies();
  }, [fetchFunction]); // fectFunction이 변경될때 마다 재실행

  // loading 상태일 때의 컴포넌트
  if (loading) {
    return {
      movies: [],
      component: <Container>로딩 중...</Container>
    };
  }

  // error 상태일 때의 컴포넌트
  if (error) {
    return {
      movies: [],
      component: status.component
    };
  }

  // 정상적인 경우
  return {
    movies,
    component: null
  };
};

export default useMovies;