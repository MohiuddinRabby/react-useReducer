import React, { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext/CounterContext";

const CounterThreeDecrement = () => {
  const { decrementCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default CounterThreeDecrement;
