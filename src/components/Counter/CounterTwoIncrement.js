import React, { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext/CounterContext";

const CounterTwoIncrement = () => {
  const { incrementCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default CounterTwoIncrement;
