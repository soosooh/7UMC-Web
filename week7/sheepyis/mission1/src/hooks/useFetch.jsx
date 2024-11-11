import { useQuery } from "@tanstack/react-query";
import { API } from "../api/axios";
import CategoryData from "../utils/categoryData";

const useFetch = (url) => {
    const fetchData = async () => {
        if (url) {
            const response = await API.get(url);
            return response.data.results || response.data;
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(CategoryData);
                }, 1000);
            });
        }
    };

    // useQuery 변경
    const { data, isLoading: loading, error } = useQuery({
        queryKey: ["fetchData", url],
        queryFn: fetchData,
        enabled: !!url || !url,
        retry: 1,
    });

    return { data, loading, error };
};

export default useFetch;
