import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useTodos = (title) => {
  return useQuery({
    queryKey: title ? ['todos', { title }] : ['todos'],
    queryFn: async () => {
      const { data } = await apiClient.get('/todo', {
        params: title ? { title } : {},
      });
      return data;
    },
  });
};

// getById
export const useTodoById = (id) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: async () => {
      const { data } = await apiClient.get(`/todo/${id}`);
      return data;
    },
  });
};

// add
export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newTodo) => {
      const { data } = await apiClient.post('/todo', newTodo);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

// update
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, updates }) => {
      const { data } = await apiClient.patch(`/todo/${id}`, updates);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

// delete
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      await apiClient.delete(`/todo/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
