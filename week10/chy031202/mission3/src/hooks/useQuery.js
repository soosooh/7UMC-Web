//import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';

const useCustomFetch = (url) => {
    // const [data, setData] = useState({ results: [] });
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ['movieData', url], // 쿼리 키 설정
    //     queryFn: async () => {
    //         const response = await axiosInstance.get(url);
    //         return response.data; // 필요한 데이터만 반환
    //     },
    //     retry: false, // 실패 시 재시도 설정 (옵션)
    // });

    // console.log("Fetched data in useCustomFetch:", data);
    
    // return {data: data || { results: [] }, isLoading, isError};
}

export default useCustomFetch;