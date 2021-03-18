import React, { useContext } from "react";
import { ApiOneContext } from "../../contexts/ApiOneContext/ApiOneContext";

const ApiOne = () => {
  const { state, dispatch } = useContext(ApiOneContext);
  const getDispatch = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_API_DATA", payload: data }));
  };
  return (
    <div>
      <h1>Api One</h1>
      <button onClick={getDispatch}>Get Data</button>
      {state?.apiData?.map((item) => (
        <li key={item?.id}>{item.title}</li>
      ))}
    </div>
  );
};

export default ApiOne;
