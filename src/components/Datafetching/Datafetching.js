import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";

const initState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: true,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};
const Datafetching = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      <h1>{state.loading ? "loading..." : state.post.title}</h1>
      <p>{state.error ? state.error : null}</p>
    </div>
  );
};

export default Datafetching;
