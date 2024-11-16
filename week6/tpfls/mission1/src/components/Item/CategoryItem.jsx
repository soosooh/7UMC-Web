import React from 'react';
import styled from 'styled-components';

const CategoryItem = ({ category, onClick, altText }) => {
    return (
        <CategoryCard onClick={() => onClick(category)}>
            <TextBox>{altText}</TextBox>
        </CategoryCard>
    );
};

// Styled Components
const CategoryCard = styled.div`
    background-color: #D9D9D9;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    height: 125px;
    position: relative;
    cursor: pointer;
`;

const TextBox = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 5px 0px;
    color: white;
    font-weight: bold;
    display: inline-block;
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 140px;
    height: 25px;
    text-align: center;
`;

export default CategoryItem;
