import React, { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext/CounterContext";
import CounterThreeDecrement from "./CounterThreeDecrement";
import CounterTwoIncrement from "./CounterTwoIncrement";

const CounterOne = () => {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter-One</h1>
      <h2>Count: {state.count}</h2>
      <div style={{ display: "flex" }}>
        <CounterTwoIncrement />
        &nbsp;
        <CounterThreeDecrement />
      </div>
    </div>
  );
};

export default CounterOne;
