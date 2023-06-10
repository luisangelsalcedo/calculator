import { useReducer, useEffect } from 'react';
import { keys } from '../keys';
import { calculatorReducer, initialState } from '../reducers';

export function useCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

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

  return { state, ...state, handleClick };
}
