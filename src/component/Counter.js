import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state,action) => {
    /**
     * reducer() accepts two values & returns one value
     */
    
};
const Counter = () => {
  /**
   * useReducer accepts two arg
   * first arg is a function - reducer()
   * second arg is initial state - initialState
   */
  useReducer(reducer, initialState);
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default Counter;
