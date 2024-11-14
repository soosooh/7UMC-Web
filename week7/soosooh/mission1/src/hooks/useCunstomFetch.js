import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const respose = await axiosInstance.get(url);
      return respose.data;
    },
  });

  return { data, isLoading, isError };
};
export default useCustomFetch;
