import { createContext, useReducer } from "react";
import { TodoReducer } from "../../reducers/TodoReducer/TodoReducer";

export const TodoContext = createContext();
export const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(TodoReducer);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
