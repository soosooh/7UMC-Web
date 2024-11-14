import { useState, useEffect, useRef } from 'react';

const useMovies = (fetchFunction, params = null) => {
  const [data, setData] = useState(null);  // [] 대신 null로 초기값 변경
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevParamsRef = useRef();

  useEffect(() => {
    if (params && JSON.stringify(prevParamsRef.current) === JSON.stringify(params)) {
      return;
    }
    prevParamsRef.current = params;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFunction(params);
        console.log('API Response:', response);
        
        if (!response.data) {
          throw new Error('데이터가 없습니다.');
        }

        // 응답 데이터 구조에 따라 다르게 처리
        const movieData = response.data.results ? response.data.results : response.data;
        setData(movieData);
        setError(null);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message || '데이터를 불러오는데 실패했습니다.');
        setData(null);  // [] 대신 null로 변경
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, params]);

  if (loading) {
    return {
      data: null,  // [] 대신 null로 변경
      component: <div>로딩 중...</div>
    };
  }

  if (error) {
    return {
      data: null,  // [] 대신 null로 변경
      component: <div>Error: {error}</div>
    };
  }

  return {
    data,
    component: null
  };
};

export default useMovies;