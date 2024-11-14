import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";

const fetchMovies = async ({ category, page }) => {
  const { data } = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${page}`);
  return data;
};

const useGetMovies = (category, page) => {
  return useQuery(["movies", category, page], () => fetchMovies({ category, page }), {
    keepPreviousData: true,
    staleTime: 10000,
    cacheTime: 10000,
  });
};

export default useGetMovies;
