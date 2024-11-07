// src/hooks/useMovies.jsx
import { useState, useEffect, useRef } from 'react';

const useMovies = (fetchFunction, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevParamsRef = useRef();

  useEffect(() => {
    // params가 이전과 동일하면 API 호출하지 않음
    if (JSON.stringify(prevParamsRef.current) === JSON.stringify(params)) {
      return;
    }
    prevParamsRef.current = params;

    if (!params) {
      setData([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFunction(params);
        setData(response.data.results || []);
        setError(null);
      } catch (err) {
        setError(err.message || '데이터를 불러오는데 실패했습니다.');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, params]);

  if (loading) {
    return {
      data: [],
      component: <div>로딩 중...</div>
    };
  }

  if (error) {
    return {
      data: [],
      component: <div>{error}</div>
    };
  }

  return {
    data,
    component: null
  };
};

export default useMovies;