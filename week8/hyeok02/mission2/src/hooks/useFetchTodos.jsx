import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:3000/todo";

export const useFetchTodos = (endpoint) => {
  const fetchTodos = async () => {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", endpoint],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5, 
  });

  return { data, error, isLoading };
};
