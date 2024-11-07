// src/hooks/useMovies.jsx
import { useState, useEffect, useRef } from 'react';

const useMovies = (fetchFunction, params = null) => {  // params의 기본값을 null로 설정
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevParamsRef = useRef();

  useEffect(() => {
    // params가 필요한 경우(예: 검색)에만 params 비교
    if (params && JSON.stringify(prevParamsRef.current) === JSON.stringify(params)) {
      return;
    }
    prevParamsRef.current = params;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFunction(params);
        console.log('API Response:', response); // 응답 확인
        if (!response.data) {
          throw new Error('데이터가 없습니다.');
        }
        setData(response.data.results || []);
        setError(null);
      } catch (err) {
        console.error('API Error:', err); // 에러 로깅
        setError(err.message || '데이터를 불러오는데 실패했습니다.');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, params]);

  // 로딩 상태 컴포넌트
  if (loading) {
    return {
      data: [],
      component: <div>로딩 중...</div>
    };
  }

  // 에러 상태 컴포넌트
  if (error) {
    return {
      data: [],
      component: <div>Error: {error}</div>
    };
  }

  // 정상 데이터 반환
  return {
    data,
    component: null
  };
};

export default useMovies;