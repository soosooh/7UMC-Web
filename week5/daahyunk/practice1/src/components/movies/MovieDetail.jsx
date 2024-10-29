import styled from 'styled-components';
import PropTypes from 'prop-types';

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  padding: 1vh 1vw;
  overflow-y: auto;
`;

const Title = styled.h3`
  margin-bottom: 1vh;
  font-size: 2vh;
  font-weight: bold;
`;

const Overview = styled.p`
  font-size: 1.2vh;
  line-height: 1.5;
`;


const MovieDetail = ({ title, overview }) => {
  return (
    <Detail>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </Detail>
  );
};

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
};

MovieDetail.defaultProps = {
  overview: '상세 설명이 없습니다.',
};


export default MovieDetail;
