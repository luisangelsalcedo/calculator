import PropTypes from 'prop-types';
import './display.scss';

export function Display({ display, result }) {
  return (
    <div className='display'>
      <h3>
        <small>{display}</small>
      </h3>
      <h1
        className={result.length >= 9 ? 'result result-sm' : 'result result-bg'}
      >
        <span>{result}</span>
      </h1>
    </div>
  );
}

Display.propTypes = {
  display: PropTypes.string,
  result: PropTypes.string,
};

Display.defaultProps = {
  display: '',
  result: '0',
};
