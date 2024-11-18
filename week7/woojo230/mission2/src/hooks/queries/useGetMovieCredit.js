import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance";

const useGetMovieCredits = (movieId) => {
  return useQuery({
    queryKey: ["movieCredits", movieId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`);
      return data;
    },
    staleTime: 10000,
  });
};

export default useGetMovieCredits;
