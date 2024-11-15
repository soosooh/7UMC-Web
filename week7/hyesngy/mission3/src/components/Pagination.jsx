import React from 'react';
import styled from 'styled-components';

const PageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding-bottom: 3rem;
`
const PageButton = styled.div`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.disabled ? 'gray' : '#F82F62')};
  color: #fff;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  
  &:hover {
    background: ${(props) => (props.disabled ? 'gray' : '#e52958')};
  }
`

const Pagination = ({ listType, page, handlePrev, handleNext }) => {
  if (listType != 'search') {
    return (
      <PageDiv>
        <PageButton onClick={handlePrev} disabled={page === 1}>이전</PageButton>
        <span>{page} 페이지</span>
        <PageButton onClick={handleNext}>다음</PageButton>
      </PageDiv>
    )
  }
};

export default Pagination;