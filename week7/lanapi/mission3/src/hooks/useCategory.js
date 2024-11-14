
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCategoryMovies = async (category, page = 1) => {
    const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}`, {
        headers: {
            Authorization: token,
        },
        params: {
            language: 'ko',
            page: page,
        },
    });
    return response.data;
};

export const useCategory = (category) => {
    return useInfiniteQuery({
        queryKey: [category],
        queryFn: ({ pageParam = 1 }) => fetchCategoryMovies(category, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const maxPages = lastPage.total_pages;
            const nextPage = allPages.length + 1;
            return nextPage <= maxPages ? nextPage : undefined;
        },
        staleTime: 1000 * 60 * 5,
    });
};

