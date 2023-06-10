import { keys } from '../../keys';
import { Key } from '../key/Key';
import PropTypes from 'prop-types';

export function KeyTop({ handleClick }) {
  return (
    <div className='keys-top'>
      <Key
        value={keys.Escape.value}
        label={keys.Escape.label}
        handleClick={handleClick}
      />
      <Key disabled={true} />
      <Key disabled={true} />
    </div>
  );
}

KeyTop.propTypes = {
  handleClick: PropTypes.func,
};
