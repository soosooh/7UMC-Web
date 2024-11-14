import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";

const useGetMovieDetails = (movieId) => {
  return useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/movie/${movieId}?language=ko-KR`);
      return data;
    },
    staleTime: 10000, // 데이터 캐싱 시간
  });
};

export default useGetMovieDetails;
