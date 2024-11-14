import PropTypes from 'prop-types';
import styled from 'styled-components';
import CreditsItem from './CreditsItem';

const CreditsContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CreditsList = ({ credits }) => (
  <CreditsContainer>
    <h2>감독/출연</h2>
    <CastList>
      {credits.cast.slice(0, 10).map((castMember) => (
        <CreditsItem key={castMember.cast_id} castMember={castMember} />
      ))}
    </CastList>
  </CreditsContainer>
);

CreditsList.propTypes = {
  credits: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        cast_id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CreditsList;
