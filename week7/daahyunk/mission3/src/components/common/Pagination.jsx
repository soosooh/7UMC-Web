import styled from 'styled-components';
import PropTypes from 'prop-types';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const PageText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#666' : '#FF073D')};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#666' : '#d02148')};
  }
`;

const Pagination = ({ page, onPrevious, onNext, hasNextPage }) => (
  <PaginationContainer>
    <PaginationButton onClick={onPrevious} disabled={page === 1}>
      이전
    </PaginationButton>
    <PageText>{page} 페이지</PageText>
    <PaginationButton onClick={onNext} disabled={!hasNextPage}>
      다음
    </PaginationButton>
  </PaginationContainer>
);

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
};

export default Pagination;
