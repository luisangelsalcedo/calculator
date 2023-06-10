import PropTypes from 'prop-types';
import './key.scss';

export function Key({ handleClick, value, label, disabled }) {
  return (
    <button
      onClick={handleClick}
      data-val={value}
      className='key'
      disabled={disabled}
    >
      {label || value}
    </button>
  );
}

Key.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Key.defaultProps = {
  handleClick: () => {},
  value: '',
  label: '',
  disabled: false,
};
