import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, method = 'GET', body = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios({
          url,
          method,
          data: body,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, method, body]);

  return { data, loading, error };
}

export default useFetch;
