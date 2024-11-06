import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

// const { data, isLoading, isError } = useCustomFetch('url');

const useCustomFetch = (url) => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoaing] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaing(true);
      try {
        const response = await axiosInstance.get(url);
        setMoviesData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoaing(false);
      }
    };
    fetchData();
  }, [url]);

  return { moviesData, isLoading, isError };
};

export default useCustomFetch;
