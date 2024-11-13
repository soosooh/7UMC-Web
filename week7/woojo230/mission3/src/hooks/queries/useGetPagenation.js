import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";

const fetchMovies = async ({ category, page }) => {
  const { data } = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${page}`);
  return data;
};

const useGetPagination = (category, page) => {
  return useQuery({
    queryKey: ["movies", category, page],
    queryFn: () => fetchMovies({ category, page }),
    keepPreviousData: true,
    staleTime: 10000,
    cacheTime: 10000,
    retry: false, // 실패 시 재시도하지 않음
  });
};

export default useGetPagination;
