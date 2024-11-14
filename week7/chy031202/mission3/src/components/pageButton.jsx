import React from 'react';
import styled from 'styled-components';

const Pagination = ({ currentPage, onPrevPage, onNextPage, maxPage }) => {
    return (
        <PaginationContainer>
            <PageButton onClick={onPrevPage} disabled={currentPage === 1}>
                이전
            </PageButton>
            <PageIndicator>{currentPage} 페이지</PageIndicator>
            <PageButton onClick={onNextPage} disabled={currentPage === maxPage}>
                다음
            </PageButton>
        </PaginationContainer>
    );
};

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const PageButton = styled.button`
    width: 70px;
    height: 35px;
    background: ${(props) => (props.disabled ? '#888888' : '#FF073D')};
    border-radius: 10px;
    color: white;
    margin: 0 10px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const PageIndicator = styled.span`
    color: white;
    font-size: 18px;
    margin: 20px;
`;

export default Pagination;