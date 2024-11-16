import React, { useState } from 'react';
import styled from 'styled-components';
import useFetchMovies from '../hooks/useFetchMovies';
import CategoryList from '../components/list/CategoryList';
import MoviesList from '../components/list/MovieList';

const Categories = () => {
    const [category, setCategory] = useState(null);
    const { movies, loading, error } = useFetchMovies(category);

    const handleCategoryClick = (categoryId) => {
        setCategory(categoryId);
    };

    return (
        <Container>
            <CategoryList onCategoryClick={handleCategoryClick} />
            {loading && <LoadingMessage>로딩 중...</LoadingMessage>}
            {error && <ErrorMessage>에러 발생: {error}</ErrorMessage>}
            {category && !loading && !error && <MoviesList movies={movies} />}
        </Container>
    );
};

const Container = styled.div`
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const LoadingMessage = styled.p`
    text-align: center;
    color: white;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

export default Categories;
