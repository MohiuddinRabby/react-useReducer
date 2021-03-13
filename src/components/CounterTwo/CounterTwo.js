import React, { useContext } from "react";
import { CounterContextTwo } from "../../contexts/CounterContextTwo/CounterContextTwo";

const CounterTwo = () => {
  const { stateTwo, incrementCounterTwo, decrementCounterTwo } = useContext(
    CounterContextTwo
  );
  return (
    <div>
      <h1>Counter-Two-with Types</h1>
      <h2>Count two : {stateTwo.count}</h2>
      <button onClick={incrementCounterTwo}>Inc</button>
      <button onClick={decrementCounterTwo}>Decr</button>
    </div>
  );
};

export default CounterTwo;
