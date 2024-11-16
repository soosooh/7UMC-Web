import { useState, useEffect } from 'react';
import { fetchUserInfo } from '../api/movie';

const useFetchUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchUserInfo();
                setUserInfo(data);
            } catch (err) {
                const errorMessage = err.response?.data?.message || err.message || '알 수 없는 에러';
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { userInfo, loading, error };
};

export default useFetchUserInfo;
