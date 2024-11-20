import React from 'react';
import styled from 'styled-components';

const Pagination = ({ page, handleNextPage, handlePreviousPage }) => {
    return (
        <PaginationControls>
            <Button
                onClick={handlePreviousPage}
                disabled={page === 1}
                $isDisabled={page === 1}
            >
                이전
            </Button>
            <PageNumber>Page {page}</PageNumber>
            <Button onClick={handleNextPage}>다음</Button>
        </PaginationControls>
    );
};

export default Pagination;

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ffffff;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        max-width: 90%;
        gap: 5px;
        padding: 8px 15px;
    }
`;

const Button = styled.button`
    flex-grow: 1;
    min-width: 80px;
    max-width: 150px;
    height: 35px;
    background: ${(props) => (props.disabled ? '#d3d3d3' : '#ff073d')};
    border: none;
    border-radius: 10px;
    color: #ffffff;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-size: 1rem;
    transition: opacity 0.3s;

    &:hover {
        opacity: ${(props) => (props.disabled ? 1 : 0.8)};
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 8px;
    }
`;

const PageNumber = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: black;
`;
