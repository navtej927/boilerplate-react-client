import React from 'react';

const initialState = 0;

const CounterContext = React.createContext();

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = React.useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value={{ counterCount: count, counterDispatch: dispatch }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
