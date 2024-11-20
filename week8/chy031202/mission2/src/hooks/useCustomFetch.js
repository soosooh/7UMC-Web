import { useEffect, useState } from "react";
import axios from "axios";

const useCustomFetch = (baseUrl, defaultOptions = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(baseUrl);
    const [options, setOptions] = useState(defaultOptions);

    const fetchData = async () => {
        try {
            setLoading(true); // 로딩 시작
            const response = await axios.get(url, options);
            setData(response.data[0]); // 데이터 저장
            console.log("데이터 로드 성공:", response.data);
        } catch (err) {
            setError(err); // 에러 저장
            console.error("데이터 로드 실패:", err);
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, JSON.stringify(options)]); // URL 또는 옵션 변경 시 데이터 가져오기

    return { data, loading, error, refetch: fetchData };
};

export default useCustomFetch;
