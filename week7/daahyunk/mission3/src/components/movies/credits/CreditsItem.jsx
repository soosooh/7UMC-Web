import PropTypes from 'prop-types';
import styled from 'styled-components';

const CastItem = styled.div`
  margin: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const CastImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const CastName = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const DEFAULT_IMAGE = '/assets/images/default.png';

const CreditsItem = ({ castMember }) => (
  <CastItem>
    <CastImage
      src={castMember.profile_path ? `https://image.tmdb.org/t/p/w200${castMember.profile_path}` : DEFAULT_IMAGE}
      alt={castMember.name}
    />
    <CastName>{castMember.name}</CastName>
    <p>({castMember.character})</p>
  </CastItem>
);

CreditsItem.propTypes = {
  castMember: PropTypes.shape({
    cast_id: PropTypes.number.isRequired,
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreditsItem;
