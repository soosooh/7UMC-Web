import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios~instance.js';

const fetchMovies = async ({ pageParam = 1 , pagename}) => {
    const response = await axiosInstance.get(`/movie/${pagename}?language=ko-KR&page=${pageParam}`);
    return response.data;
};

export const useInfiniteMoviesQuery = (key = 'nowPlayingMovies') => {
    return useInfiniteQuery({
        queryKey: [key], // 매개변수로 받은 queryKey 설정
        queryFn: fetchMovies,
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length < 4 ? allPages.length + 1 : undefined;
        },
        retry: false,
    });
};