import React, { useContext, useEffect } from "react";
import { ApiTwocontext } from "../../contexts/ApiTwoContext/ApiTwoContext,";
import { ACTIONS } from "../../reducers/ApiTwoReducer/ApiTwoReducer";

const ApiTwo = () => {
  const { state, dispatch } = useContext(ApiTwocontext);
  console.log(state);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.GET_ALL_POST_DATA,
          payload: data.slice(0, 5),
        });
      });
  }, [dispatch]);
  const getSingleData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.GET_SINGLE_POST_DATA,
          payload: data,
        });
      });
  };
  return (
    <div>
      <h1>Api Two</h1>
      {state.allPostData.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      <button style={{ marginTop: "20px" }} onClick={getSingleData}>
        Get single Post data
      </button>
      {state.loading ? null : <li>{state.singlePostData.title}</li>}
    </div>
  );
};

export default ApiTwo;
