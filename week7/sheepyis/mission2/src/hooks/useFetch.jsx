import { useInfiniteQuery } from "@tanstack/react-query";
import { API } from "../api/axios";
import CategoryData from "../utils/categoryData";

const useFetch = (url) => {
  // 데이터 가져오는 함수 (기본값: page 1)
  const fetchData = async ({ pageParam = 1 }) => {
    if (url) {
      const response = await API.get(url, {
        params: { page: pageParam },
      });
      // console.log(response.data);
      return response.data;
    } else {
      return { results: CategoryData };
    }
  };

  // 무한 스크롤 데이터 처리
  const {
    data,
    isLoading: loading, // 로딩 상태
    isError: error, // 에러 상태
    fetchNextPage,  // 다음 페이지
    hasNextPage,  // 다음 페이지의 여부
    isFetchingNextPage, // 다음 페이지의 로딩 여부
  } = useInfiniteQuery({
    queryKey: ["fetchData", url],
    queryFn: fetchData,
    getNextPageParam: (lastPage) => {
      // 다음 페이지 번호 계산
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    retry: 1, // 실패 시 재시도 횟수
  });

  return {
    data,
    loading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useFetch;
