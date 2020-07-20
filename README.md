## Example of React hook useReducer
#### example-1

```js
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  /**
   * reducer() accepts two values & returns one value
   * action - is like an instrunction to the reducer function
   */
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const Counter = () => {
  /**
   * useReducer accepts two arg
   * first arg is a function - reducer()
   * second arg is initial state - initialState
   */
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
      </div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;

```
