import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#F82F62',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  margin: '0 10px',
};

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      onPageChange(nextPage);
    }
  }, [currentPage, totalPages, onPageChange]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      onPageChange(prevPage);
    }
  }, [currentPage, onPageChange]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={goToPreviousPage}
        disabled={isFirstPage}
        style={{
          ...buttonStyle,
          cursor: isFirstPage ? 'not-allowed' : 'pointer',
        }}
      >
        이전
      </button>
      <span style={{ margin: '0 10px', fontSize: '18px' }}>
        {currentPage} 페이지
      </span>
      <button
        onClick={goToNextPage}
        disabled={isLastPage}
        style={{
          ...buttonStyle,
          cursor: isLastPage ? 'not-allowed' : 'pointer',
        }}
      >
        다음
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
