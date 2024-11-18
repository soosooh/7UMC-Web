import React from 'react';
import styled from 'styled-components';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <PaginationContainer>
            <PageButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                이전
            </PageButton>
            {Array.from({ length: totalPages }, (_, index) => (
                <PageButton
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    active={currentPage === index + 1}
                >
                    {index + 1}
                </PageButton>
            ))}
            <PageButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                다음
            </PageButton>
        </PaginationContainer>
    );
};

// Styled Components
const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const PageButton = styled.button`
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: ${({ active }) => (active ? '#007bff' : '#e50914')};
    color: white;
    cursor: pointer;
    &:hover:not(:disabled) {
        background-color: #b00711;
    }
    &:disabled {
        background-color: #555;
        cursor: not-allowed;
    }
`;

export default Pagination;
