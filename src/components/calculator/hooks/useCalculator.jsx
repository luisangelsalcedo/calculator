import { useReducer, useEffect, useState } from 'react';
import { keys } from '../keys';
import { calculatorReducer, initialState } from '../reducers';
import { types } from '../types';

export function useCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const onKeyPress = key => {
    if (keys[key]) {
      dispatch({
        type: keys[key].type,
        payload: keys[key].value,
      });
      // pintar
      document.querySelectorAll('.key').forEach(ele => {
        ele.classList.remove('push');
        const attr = ele.getAttribute('data-val');
        if (attr === key) ele.classList.add('push');
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', e => onKeyPress(e.key));
    return () => window.removeEventListener('keyup', onKeyPress, false);
  }, []);

  const handleClick = ({ target }) => {
    onKeyPress(target.getAttribute('data-val'));
  };

  const deleteHistory = () => {
    dispatch({
      type: types.DELETE_HISTORY,
    });
    setIsHistoryOpen(false);
  };

  const openHistory = () => {
    setIsHistoryOpen(open => !open);
  };

  return {
    state,
    ...state,
    handleClick,
    deleteHistory,
    openHistory,
    isHistoryOpen,
  };
}
