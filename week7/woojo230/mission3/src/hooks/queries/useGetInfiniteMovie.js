import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";

const fetchMovies = async ({ category, pageParam = 1 }) => {
  const { data } = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${pageParam}`);
  return data;
};

const useGetInfiniteMovie = (category) => {
  return useInfiniteQuery({
    queryKey: ["movies", category],
    queryFn: ({ pageParam = 1 }) => fetchMovies({ category, pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const lastMovie = lastPage?.results?.at(-1);
      return lastMovie ? allPages.length + 1 : undefined;
    },
    staleTime: 10000,
    cacheTime: 10000,
  });
};

export default useGetInfiniteMovie;
