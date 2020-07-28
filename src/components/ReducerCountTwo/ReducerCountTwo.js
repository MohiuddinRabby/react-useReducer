import React from "react";
import { useReducer } from "react";
const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { counter: state.counter + action.value };
    case "decreament":
      return { counter: state.counter - action.value };
    case "reset":
      return { counter: (state.counter = 0) };
    default:
      return state;
  }
};
const ReducerCountTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>This is reducer count Two:{state.counter}</h1>
      <button onClick={() => dispatch({ type: "increament", value: 1 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decreament", value: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "increament", value: 5 })}>
        Increase 5
      </button>
      <button onClick={() => dispatch({ type: "decreament", value: 5 })}>
        Decrease 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default ReducerCountTwo;
