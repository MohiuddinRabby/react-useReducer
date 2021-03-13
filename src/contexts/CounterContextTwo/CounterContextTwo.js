import { createContext, useReducer } from "react";
import {
  counterReducerTwoFunc,
  initialState,
} from "../../reducers/CounterReducerTwo/CounterReducerTwo";
import { DECREMENT, INCREMENT } from "../../reducers/CounterReducerTwo/types";

export const CounterContextTwo = createContext();
export const CounterContextTwoProvider = (props) => {
  const [stateTwo, dispatch] = useReducer(counterReducerTwoFunc, initialState);
  const incrementCounterTwo = () => {
    dispatch({ type: INCREMENT });
  };
  const decrementCounterTwo = () => {
    dispatch({ type: DECREMENT });
  };
  return (
    <CounterContextTwo.Provider
      value={{ stateTwo, incrementCounterTwo, decrementCounterTwo }}
    >
      {props.children}
    </CounterContextTwo.Provider>
  );
};
