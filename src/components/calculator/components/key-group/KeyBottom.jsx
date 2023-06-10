import { keys } from '../../keys';
import { Key } from '../key/Key';
import PropTypes from 'prop-types';

export function KeyBottom({ handleClick }) {
  return (
    <div className='keys-bottom'>
      <Key disabled={true} />
      <Key
        value={keys['0'].value}
        label={keys['0'].label}
        handleClick={handleClick}
      />
      <Key disabled={true} />
      <Key
        value={keys['='].value}
        label={keys['='].label}
        handleClick={handleClick}
      />
    </div>
  );
}

KeyBottom.propTypes = {
  handleClick: PropTypes.func,
};
