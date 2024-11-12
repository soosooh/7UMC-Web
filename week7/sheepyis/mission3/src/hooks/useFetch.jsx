import { useQuery } from "@tanstack/react-query";
import { API } from "../api/axios";
import CategoryData from "../utils/categoryData";

const useFetch = (url, page = 1) => {
    const fetchData = async () => {
        if (url) {
            const response = await API.get(url, {
              params: { page: page },
            });
            return {
                data: response.data.results || response.data,
                totalPages: response.data.total_pages,
            };
        } else {
            return { data: CategoryData };
        }
    };

    const { data, isLoading: loading, error } = useQuery({
        queryKey: ["fetchData", url, page],
        queryFn: fetchData,
        enabled: !!url || !url,
        retry: 1,
    });

    return { data: data?.data, totalPages: data?.totalPages, loading, error };
};

export default useFetch;
