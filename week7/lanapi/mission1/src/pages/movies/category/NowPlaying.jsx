//피드백
//미션1,2의 pages>movies>popular.jsx 를 포함한 대부분의 페이지가 useFetch로 수정하라고 했음에도 수정되어 있지 않아요. 
//로딩, 에러 처리가 되도록 import 해서 사용하는 방식으로 수정해서 코드 바꿔주세요!

import React from 'react';
import { useCategory } from '../../../hooks/useCategory'; 
import CategoryList from '../../../components/category/CategoryList';
import CategoryCardSkeleton from '../../../components/category/CategoryCardSkeleton'; 

const NowPlaying = () => {
    const { data: moviesData, isLoading, isError } = useCategory('now_playing');

    if (isLoading) return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
        </div>
    );
    
    if (isError) return <div>데이터를 불러오는 데 실패했습니다.</div>;

    return <CategoryList moviesData={moviesData} />;
};

export default NowPlaying;

