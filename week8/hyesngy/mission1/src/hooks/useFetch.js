import { useState, useEffect } from "react";

const useFetch = (apiFunc, params = null, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, isError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      isLoading(true);
      try {
        const result = await apiFunc(params);
        setData(result || []);
      } catch (err) {
        isError(err);
      } finally {
        isLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, setData, loading, error };
};

export default useFetch;
