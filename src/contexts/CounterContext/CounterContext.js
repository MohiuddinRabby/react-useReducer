import { createContext, useReducer } from "react";
import {
  counterReducerFunc,
  initialCounterState,
} from "../../reducers/CounterReducer/CounterReducer";

export const CounterContext = createContext();
export const CounterContextProvider = (props) => {
  const [state, dispatch] = useReducer(counterReducerFunc, initialCounterState);
  const incrementCounter = () => {
    dispatch({ type: "ICREMENT" });
  };
  const decrementCounter = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <CounterContext.Provider
      value={{ state, incrementCounter, decrementCounter }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
