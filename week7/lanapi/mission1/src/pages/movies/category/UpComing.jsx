
import React from 'react';
import { useCategory } from '../../../hooks/useCategory';
import CategoryList from '../../../components/category/CategoryList';
import CategoryCardSkeleton from '../../../components/category/CategoryCardSkeleton';

const UpComing = () => {
    const { data: moviesData, isLoading, isError } = useCategory('upcoming');

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

export default UpComing;
