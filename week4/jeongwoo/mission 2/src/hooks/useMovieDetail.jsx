import { useState, useEffect } from 'react';
import { Container } from '../styles/commonStyles';

const useMovieDetail = (movieId, fetchDetailFn, fetchCreditsFn) => {
  const [movieData, setMovieData] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [movieResponse, creditsResponse] = await Promise.all([
          fetchDetailFn(movieId),
          fetchCreditsFn(movieId)
        ]);
        
        setMovieData(movieResponse.data);
        setCredits(creditsResponse.data);
        setError(null);
      } catch (err) {
        setError('영화 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId, fetchDetailFn, fetchCreditsFn]);

  if (loading) {
    return { component: <Container>로딩 중...</Container> };
  }

  if (error) {
    return { component: <Container>{error}</Container> };
  }

  return { movieData, credits, component: null };
};

export default useMovieDetail;