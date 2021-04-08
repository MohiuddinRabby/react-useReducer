import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext/TodoContext";
import { ACTIONS } from "../../reducers/TodoReducer/TodoReducer";

const Todo = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_TASK_DATA });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Todo with reducer</h1>
    </div>
  );
};

export default Todo;
