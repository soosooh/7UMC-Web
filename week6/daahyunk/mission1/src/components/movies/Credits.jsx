import PropTypes from 'prop-types';
import CreditsList from './credits/CreditsList';

const Credits = ({ credits }) => <CreditsList credits={credits} />;

Credits.propTypes = {
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

export default Credits;
