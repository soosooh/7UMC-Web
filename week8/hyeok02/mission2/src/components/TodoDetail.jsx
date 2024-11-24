import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:3000/todo";

const TodoDetail = ({ id }) => {
  const fetchTodoDetail = async () => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  };

  const { data: todo, error, isLoading } = useQuery({
    queryKey: ["todoDetail", id],
    queryFn: fetchTodoDetail,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
    </div>
  );
};

export default TodoDetail;
