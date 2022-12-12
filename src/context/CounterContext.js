import { createContext, useContext, useState } from "react";


export const CounterContext = createContext();

const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  function ChangeCounter() {
    setCounter(counter + 1);
  };

  const value = { counter, ChangeCounter };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

const useAppContext = () => {
    return useContext(CounterContext)
}

export {CounterContextProvider, useAppContext };
