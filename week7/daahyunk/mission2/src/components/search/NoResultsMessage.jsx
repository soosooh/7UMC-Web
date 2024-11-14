import styled from "styled-components";
import PropTypes from "prop-types";

const MessageContainer = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
  color: white;
`;

const NoResultsMessage = ({ query }) => (
  <MessageContainer>
    해당하는 검색어 &quot;{query}&quot;에 <br />
    해당하는 데이터가 없습니다.
  </MessageContainer>
);

NoResultsMessage.propTypes = {
  query: PropTypes.string.isRequired,
};

export default NoResultsMessage;
