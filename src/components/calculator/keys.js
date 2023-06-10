import { types } from './types';

export const keys = {
  '=': { value: '=', type: types.RESULT },
  0: { value: '0', type: types.TYPING },
  1: { value: '1', type: types.TYPING },
  2: { value: '2', type: types.TYPING },
  3: { value: '3', type: types.TYPING },
  4: { value: '4', type: types.TYPING },
  5: { value: '5', type: types.TYPING },
  6: { value: '6', type: types.TYPING },
  7: { value: '7', type: types.TYPING },
  8: { value: '8', type: types.TYPING },
  9: { value: '9', type: types.TYPING },

  '+': { value: '+', label: '+', type: types.OPERATION },
  '-': { value: '-', label: '-', type: types.OPERATION },
  '*': { value: '*', label: 'x', type: types.OPERATION },
  '/': { value: '/', label: '÷', type: types.OPERATION },

  Escape: { value: 'Escape', label: 'C', type: types.CLEAN },
};
