import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 15px 0;
 gap: 10px;
 padding: 10px;

 @media (min-width: 768px) {
   margin: 20px 0;
   padding: 20px;
 }
`;

const PageButton = styled.button`
 padding: 8px 16px;
 border: none;
 border-radius: 4px;
 background-color: ${props => props.disabled ? '#666' : '#413f3f'};
 color: white;
 cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
 opacity: ${props => props.disabled ? 0.5 : 1};
 transition: background-color 0.2s;
 font-size: 14px;

 &:hover:not(:disabled) {
   background-color: #f40612;
 }
`;

const PageInfo = styled.span`
 color: white;
 font-size: 14px;
 margin: 0 15px;
 min-width: 60px;
 text-align: center;
`;

const LoadingDots = styled.div`
 color: white;
 margin-left: 10px;
 font-size: 14px;
`;

const Pagination = ({ 
 currentPage, 
 totalPages, 
 onPageChange,
 isFetching 
}) => {
 return (
   <PaginationContainer>
     <PageButton 
       onClick={() => onPageChange(currentPage - 1)}
       disabled={currentPage === 1}
     >
       이전
     </PageButton>
     
     <PageInfo>
       {currentPage} / {totalPages}
     </PageInfo>

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