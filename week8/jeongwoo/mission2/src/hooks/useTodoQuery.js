import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// API 함수들
const getTodos = async (searchTitle = '') => {
  const response = await axios.get(`${API_BASE_URL}/todo`, {
    params: searchTitle ? { title: searchTitle } : {}
  });
  return Array.isArray(response.data) ? response.data[0] : [];
};

const getTodoById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/todo/${id}`);
  return response.data;
};

const createTodo = async (todoData) => {
  const response = await axios.post(`${API_BASE_URL}/todo`, todoData);
  return response.data;
};

const updateTodo = async ({ id, ...updateData }) => {
  const response = await axios.patch(`${API_BASE_URL}/todo/${id}`, updateData);
  return response.data;
};

const deleteTodo = async (id) => {
  await axios.delete(`${API_BASE_URL}/todo/${id}`);
};

// Custom Hooks
export const useTodos = (searchTitle = '') => {
  return useQuery({
    queryKey: ['todos', searchTitle],
    queryFn: () => getTodos(searchTitle),
    enabled: true,
    staleTime: 2000,
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });
};

export const useTodoById = (id) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => getTodoById(id),
    enabled: !!id,
    staleTime: 2000,
    retry: false,
    refetchOnWindowFocus: false
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.invalidateQueries({ queryKey: ['todo', variables.id] });
    }
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });
};

export default {
  useTodos,
  useTodoById,
  useCreateTodo,
  useUpdateTodo,
  useDeleteTodo
};