import { useEffect, useState } from "react";
import axios from "axios";

const useCustomFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // 로딩 시작
                const response = await axios.get(url, options);
                setData(response.data); // 데이터 저장
            } catch (err) {
                setError(err); // 에러 저장
            } finally {
                setLoading(false); // 로딩 종료
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]); // URL 또는 옵션 변경 시 재요청

    return { data, loading, error };
};

export default useCustomFetch;
