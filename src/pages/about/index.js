import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/counter';

const About = () => {
  const context = useContext(CounterContext);
  return (
    <div>
      Counter: {context.counterCount}
      <button
        onClick={() => {
          context.counterDispatch({ type: 'increment' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          context.counterDispatch({ type: 'decrement' });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export { About as default };
