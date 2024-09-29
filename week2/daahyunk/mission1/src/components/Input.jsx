import PropTypes from 'prop-types';
import '../styles/Input.css';

const Input = ({ value, onChange, onSubmit }) => {
  return (
    <form className="input-container" onSubmit={onSubmit}>
      <input
        className="custom-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요..."
      />
    </form>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
