//페이징 부분에서 1페이지일 경우, 이전 버튼이 아예 눌리지 않도록 disabled 걸어주시고, 
//색상도 다르게 해주세요. cursor: not-allowed;도 해주세요!
//pages>home>homePage.jsx에 페이징 스타일링을 코드 내에서 하셨는데, 
//페이징은 별도의 파일로 분리해서 추후 재사용할 수 있도록 분리해주시면 더 좋을 것 같아요!


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
    gap: 5px;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.3); 
    border-radius: 8px;
    width: 100%;
    max-width: 300px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 5;

    @media (max-width: 768px) {
        position: fixed; 
        bottom: 80px; 
        left: 50%;
        transform: translateX(-50%); 
        margin-top: 0;
        max-width: 90%;
    }
`;

const Button = styled.button`
    width: 40px; 
    height: 25px; 
    font-size: 0.8rem; 
    background: ${(props) => (props.disabled ? '#d3d3d3' : '#ff073d')}; // 비활성화 시 회색
    border: none;
    border-radius: 10px;
    color: #ffffff;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; // 비활성화 시 클릭 불가능
    transition: opacity 0.3s;

    &:hover {
        opacity: ${(props) => (props.disabled ? 1 : 0.8)};
    }

    @media (max-width: 768px) {
        font-size: 0.7rem; 
        padding: 5px;
    }
`;

const PageNumber = styled.span`
    font-size: 0.8rem; 
    font-weight: bold;
    color: white;
`;
