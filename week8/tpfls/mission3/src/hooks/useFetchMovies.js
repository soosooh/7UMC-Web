import { useQuery } from '@tanstack/react-query';
import { fetchUserInfo } from '../api/movie';

const useFetchUserInfo = () => {
  const { data: userInfo, error, isLoading: loading } = useQuery(
    ['userInfo'], // 캐싱 키
    fetchUserInfo, // API 호출 함수
    {
      retry: 1, // 실패 시 재시도 횟수
      staleTime: 1000 * 60 * 5, // 5분 동안 캐싱된 데이터 유지
    }
  );

  return { userInfo, loading, error };
};

export default useFetchUserInfo;
