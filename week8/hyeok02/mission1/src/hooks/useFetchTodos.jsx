import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/todo";

export const useFetchTodos = (endpoint, method = "GET", body = null, dependencies = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await axios({
          url: `${BASE_URL}${endpoint}`,
          method,
          data: body,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint, ...dependencies]); 

  return { data, error, loading };
};
