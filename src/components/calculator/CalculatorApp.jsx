import { KeyGroup, KeyTop, KeyBottom, Display, History } from './components';
import { useCalculator } from './hooks';
import { types } from './types';
import './assets/scss/calculator-app.scss';

export function CalculatorApp() {
  const {
    state,
    display,
    result,
    history,
    handleClick,
    deleteHistory,
    openHistory,
    isHistoryOpen,
  } = useCalculator();

  return (
    <>
      <div className='calculator'>
        {!!history && (
          <History
            handleClick={openHistory}
            handleDelete={deleteHistory}
            open={isHistoryOpen}
            content={history}
          />
        )}

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
