import React, { useContext } from "react";
import { CounterContextThree } from "../../contexts/CounterContextThree/CounterContextThree";

const CounterThree = () => {
  const { state, dispatch } = useContext(CounterContextThree);
  const incCounterThree = () => {
    dispatch({ type: "INC" });
  };
  return (
    <div>
      <h1>Counter Three : {state.counter.count}</h1>
      <button onClick={incCounterThree}>inc</button>
    </div>
  );
};

export default CounterThree;
