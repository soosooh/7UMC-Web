import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios~instance";

const useCustomFetch = (url) => {
    const [data, setData] = useState({ results: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => 
    {
        const fetchData = async() => {
            setIsLoading(true);
            try{
                const response = await axiosInstance.get(url)
                setData(response);
            }catch(error) {
                setIsError(true);
            }finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, isLoading, isError}
    // useEffect(() => {
    //     const getMovies = async () => {
    //         const data = await axiosInstance.get(url)
    //         setData(movies);

    //     }
    //     getMovies()
    // }, []);
}

export default useCustomFetch;