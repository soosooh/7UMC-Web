import { useState, useEffect } from 'react';
import { Container } from '../styles/commonStyles';

const useMovies = (fetchFunction, params) => {
  const [data, setData] = useState([]);  // null 대신 빈 배열로 초기화
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState({ component: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction(params);
        
        // 영화 목록 데이터인 경우
        if (response.data.results) {
          setData(response.data.results);
        } 
        // 영화 상세 정보인 경우
        else {
          setData(response.data);
        }
        
        setError(null);
        setStatus({ component: null });
      } catch (err) {
        const errorMessage = err.message || '데이터를 불러오는데 실패했습니다.';
        setError(errorMessage);
        setStatus({ component: <Container>{errorMessage}</Container> });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, params]);

  if (loading) {
    return {
      data: [],  // 로딩 중에도 빈 배열 반환
      component: <Container>로딩 중...</Container>
    };
  }

  if (error) {
    return {
      data: [],  // 에러 상태에서도 빈 배열 반환
      component: status.component
    };
  }

  return {
    data,
    component: null
  };
};

export default useMovies;