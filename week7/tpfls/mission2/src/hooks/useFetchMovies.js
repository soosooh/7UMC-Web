// hooks/useFetchUserInfo.js
import { useState, useEffect } from 'react';
import { fetchUserInfo } from '../api/movie'; // 사용자 정보를 가져오는 API 함수

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
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { userInfo, loading, error };
};

export default useFetchUserInfo;
