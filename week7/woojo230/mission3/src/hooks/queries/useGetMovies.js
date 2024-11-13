import { axiosInstance } from "../../apis/axios-instance";
import { useQuery } from "@tanstack/react-query";

const fetchMovies = async (category, pageParam) => {
  const { data } = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${pageParam}`);
  return data;
};

const useGetMovies = (category, pageParam = 1) => {
  return useQuery({
    queryKey: ["movies", category],
    queryFn: () => fetchMovies(category, pageParam),
    staleTime: 10000,
    cacheTime: 10000,
    onError: (error) => {
      console.error("Error fetching movies:", error);
    },
  });
};

export default useGetMovies;
