import { useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const API_BASE_URL = 'http://localhost:3000';

export const useTodoApi = () => {
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTodos = async (searchTitle = '') => {
    try {
      if (searchTitle) {
        setSearchLoading(true);
      } else {
        setLoading(true);
      }
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/todo`, {
        params: searchTitle ? { title: searchTitle } : {}
      });
      return response.data[0];
    } catch (err) {
      setError(err.response?.data?.message || '데이터를 불러오는데 실패했습니다.');
      throw err;
    } finally {
      setLoading(false);
      setSearchLoading(false);
    }
  };

  // Todo 생성
  const createTodo = async (todoData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${API_BASE_URL}/todo`, todoData);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || '할 일을 생성하는데 실패했습니다.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Todo 수정
  const updateTodo = async (id, updateData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.patch(`${API_BASE_URL}/todo/${id}`, updateData);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || '할 일을 수정하는데 실패했습니다.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Todo 삭제
  const deleteTodo = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await axios.delete(`${API_BASE_URL}/todo/${id}`);
    } catch (err) {
      setError(err.response?.data?.message || '할 일을 삭제하는데 실패했습니다.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 단일 Todo 조회
  const getTodoById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/todo/${id}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || '데이터를 불러오는데 실패했습니다.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = debounce((searchTerm, callback) => {
    if (!searchTerm) {
      setSearchLoading(false);
      callback([]);
      return;
    }
    getTodos(searchTerm).then(callback).catch(console.error);
  }, 500);

  return {
    loading,
    searchLoading,
    error,
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    debouncedSearch
  };
};