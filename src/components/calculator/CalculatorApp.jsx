import { KeyGroup, KeyTop, KeyBottom, Display } from './components';
import { useCalculator } from './hooks';
// import { keys } from './keys';
import { types } from './types';
import './calculator-app.scss';

export function CalculatorApp() {
  const { state, display, result, handleClick } = useCalculator();

  return (
    <>
      <div className='calculator'>
        <Display display={display} result={result} />
        <div className='keys'>
          <KeyTop handleClick={handleClick} />
          <KeyGroup types={types.TYPING} handleClick={handleClick} />
          <KeyGroup types={types.OPERATION} handleClick={handleClick} />
          <KeyBottom handleClick={handleClick} />
        </div>
      </div>
      <textarea
        className='code'
        value={JSON.stringify(state, null, 2)}
        disabled={true}
      />
    </>
  );
}
