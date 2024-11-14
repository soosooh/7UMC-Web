import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    margin: 20px 0;
    gap: 20px;
    padding: 20px;
  }
`;

const PageButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isActive ? '#e50914' : '#413f3f'};
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  transition: all 0.2s ease;
  font-size: 12px;

  @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  &:hover:not(:disabled) {
    background-color: #f40612;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #666;
    transform: none;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

const PageNumber = styled.button`
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isActive ? '#e50914' : 'transparent'};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;

  @media (min-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.isActive ? '#e50914' : '#413f3f'};
  }
`;

const PageInfo = styled.span`
  color: white;
  font-size: 12px;
  margin: 0 10px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin: 0 15px;
  }
`;

const LoadingDots = styled.div`
  color: white;
  margin-left: 5px;
  font-size: 12px;

  @media (min-width: 768px) {
    margin-left: 10px;
    font-size: 14px;
  }
`;

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  isFetching 
}) => {
  const getPageNumbers = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        i >= currentPage - delta && 
        i <= currentPage + delta
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <PaginationContainer>
      <PageButton 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </PageButton>
      
      <PageNumbers>
        {getPageNumbers().map((pageNum, index) => (
          pageNum === '...' ? (
            <PageInfo key={`dots${index}`}>...</PageInfo>
          ) : (
            <PageNumber
              key={pageNum}
              isActive={currentPage === pageNum}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </PageNumber>
          )
        ))}
      </PageNumbers>

      <PageButton 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </PageButton>

      {isFetching && (
        <LoadingDots>로딩중...</LoadingDots>
      )}
    </PaginationContainer>
  );
};

export default Pagination;