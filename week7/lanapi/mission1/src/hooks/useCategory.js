// src/hooks/useCategory.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCategoryMovies = async (category) => {
    const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko&page=1`, {
        headers: {
            Authorization: token,
        },
    });
    return response.data;
};

export const useCategory = (category) => {
    return useQuery({
        queryKey: [category], // 객체 형태로 전달
        queryFn: () => fetchCategoryMovies(category),
        staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시
    });
};


// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const fetchCategoryMovies = async (category) => {
//     const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko&page=1`, {
//         headers: {
//             Authorization: token,
//         },
//     });
//     return response.data;
// };

// export const useCategory = (category) => {
//     return useQuery([category], () => fetchCategoryMovies(category), {
//         staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시
//     });
// };


