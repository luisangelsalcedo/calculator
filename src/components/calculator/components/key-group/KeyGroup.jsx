import { keys } from '../../keys';
import { Key } from '../key/Key';
import PropTypes from 'prop-types';
import './key-group.scss';

export function KeyGroup({ types, handleClick }) {
  return (
    <div className={`keys-${types}`}>
      {Object.entries(keys)
        .filter(([, { type, value }]) => type === types && value !== '0')
        .map(([, { value, label }]) => {
          return (
            <Key
              key={value}
              value={value}
              label={label}
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
}

KeyGroup.propTypes = {
  types: PropTypes.string,
  handleClick: PropTypes.func,
};
