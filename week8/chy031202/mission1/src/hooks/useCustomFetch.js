import { useEffect, useState } from "react";
import axios from "axios";

const useCustomFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true); // 로딩 시작
            const response = await axios.get(url, options);
            setData(response.data[0]); // 데이터 저장
            console.log("Todo 데이터 로드 성공:", response.data[0]);
        } catch (err) {
            setError(err); // 에러 저장
            console.error("Todo 데이터 로드 실패:", err);
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, JSON.stringify(options)]); // URL 또는 옵션 변경 시 재요청

    return { data, loading, error, refetch: fetchData }; // refetch 추가
};

export default useCustomFetch;
