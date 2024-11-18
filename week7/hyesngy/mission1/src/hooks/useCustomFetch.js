import { movieApi } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useCustomFetch = (url, queryKey) => {
  const fetchData = async () => {
    const response = await movieApi.get(url);
    return response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey, url],
    queryFn: fetchData,
    staleTime: 10000,
    cacheTime: 10000,
  });

  return { data, isLoading, isError };
};

export default useCustomFetch;
