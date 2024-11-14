// components/common/Pagination.jsx
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
  padding: 20px;
`;

const PageButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isActive ? '#e50914' : '#413f3f'};
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  transition: all 0.2s ease;
  font-size: 14px;

  &:hover:not(:disabled) {
    background-color: #f40612;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PageNumber = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isActive ? '#e50914' : 'transparent'};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${props => props.isActive ? '#e50914' : '#413f3f'};
  }
`;

const PageInfo = styled.span`
  color: white;
  font-size: 14px;
  margin: 0 15px;
`;

const LoadingDots = styled.div`
  color: white;
  margin-left: 10px;
`;

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  isFetching 
}) => {
  // 표시할 페이지 번호 범위 계산
  const getPageNumbers = () => {
    const delta = 2; // 현재 페이지 기준 앞뒤로 보여줄 페이지 수
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