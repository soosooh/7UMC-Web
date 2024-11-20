import { movieApi } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useCustomFetch = (url, listType, page = 1) => {
  const fetchData = async () => {
    const response = await movieApi.get(`${url}&page=${page}`);
    console.log("🚀 ~ fetchData ~ response.data:", response.data);
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [listType, url, page],
    queryFn: fetchData,
    keepPreviousData: true,
    staleTime: 10000,
    cacheTime: 10000,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useCustomFetch;
