import { createContext, useReducer } from "react";
import { CounterReducerThree } from "../../reducers/CounterReducerThree/CounterReducerThree";

export const CounterContextThree = createContext();
export const CounterContextThreeProvider = (props) => {
  const [state, dispatch] = useReducer(CounterReducerThree, {
    counter: { count: 0 },
  });
  return (
    <CounterContextThree.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContextThree.Provider>
  );
};
