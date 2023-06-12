import PropTypes from 'prop-types';
import { IconHistory, IconTrash } from '../../assets/svg';
import './history.scss';

export function History({ handleClick, handleDelete, open, content }) {
  return (
    <>
      <div
        className={open ? 'calculator-history active' : 'calculator-history'}
      >
        <div>
          <textarea value={content} disabled={true}></textarea>
          <button
            className='calculator-history-btn delete'
            onClick={handleDelete}
          >
            <IconTrash /> <span>Delete history</span>
          </button>
        </div>
      </div>

      <button className='calculator-history-btn open' onClick={handleClick}>
        <IconHistory />
        <span>History</span>
      </button>
    </>
  );
}

History.propTypes = {
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
  open: PropTypes.bool,
  content: PropTypes.string,
};
