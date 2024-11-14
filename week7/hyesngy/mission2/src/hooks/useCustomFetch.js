import { movieApi } from "../api/movieApi";
import { useInfiniteQuery } from "@tanstack/react-query";

const useCustomFetch = (url, listType) => {
  const fetchData = async ({ pageParam = 1 }) => {
    const response = await movieApi.get(`${url}&page=${pageParam}`);
    console.log("🚀 ~ fetchData ~ response.data:", response.data);
    return response.data;
  };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [listType, url],
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = lastPage.total_pages;
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
    staleTime: 10000,
    cacheTime: 10000,
  });

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useCustomFetch;
