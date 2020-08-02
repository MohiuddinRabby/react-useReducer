import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { reducer, iniState } from "../../reducers/datafetchReducer";

const DatafetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, iniState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      <h2>This is datafetchig two</h2>
      <h1>{state.postData.title}</h1>
    </div>
  );
};

export default DatafetchingTwo;
