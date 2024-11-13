import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [url],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await axiosInstance.get(url, {
          params: { page: pageParam },
        });
        return response.data;
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.page < lastPage.total_pages
          ? allPages.length + 1
          : undefined;
      },
    });

  return { data, isLoading, isError, fetchNextPage, hasNextPage };
};

export default useCustomFetch;
