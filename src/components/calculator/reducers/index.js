import { types } from '../types';
import { keys } from '../keys';

export const initialState = {
  start: true,
  operand1: 0,
  operator: null,
  operand2: 0,
  result: '0',
  display: '',
  message: '',
};

export function calculatorReducer(state, action) {
  const { type, payload } = action;
  const { start, operand1, operator, operand2, result } = state;

  switch (type) {
    case types.TYPING: {
      // validando la cantidad de caracteres ingresados
      if (start && String(operand1).length > 15) return state;
      if (!start && String(operand2).length > 15) return state;

      // reiniciamos todo al ingresar un numero despues de un resultado
      if (start && operator && operand2) {
        return {
          ...initialState,
          operand1: Number(payload),
          result: payload,
        };
      }

      return {
        ...state,
        operand1: start ? Number(operand1 + payload) : operand1,
        operand2: !start ? Number(operand2 + payload) : operand2,
        result: start
          ? String(Number(operand1 + payload))
          : String(Number(operand2 + payload)),
      };
    }

    case types.OPERATION: {
      return {
        ...state,
        start: false,
        operator: payload,
        result: '0',
        display: result + keys[payload].label,
      };
    }

    case types.RESULT: {
      let result = 0;

      if (operator === '+') {
        result = operand1 + operand2;
      }
      if (operator === '-') {
        result = operand1 - operand2;
      }
      if (operator === '*') {
        result = operand1 * operand2;
      }
      if (operator === '/') {
        result = operand1 / operand2;
      }
      if (operator === null) {
        return state;
      }

      return {
        ...state,
        start: true,
        operand1: result,
        result: String(result),
        display: String(operand1 + keys[operator].label + operand2),
      };
    }

    case types.CLEAN: {
      return initialState;
    }
    default:
      return state;
  }
}
