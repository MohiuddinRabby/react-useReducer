import { createContext, useReducer } from "react";
import { ApiOneReducer } from "../../reducers/ApiOneReducer/ApiOneReducer";

export const ApiOneContext = createContext();
export const ApiOneContextProvider = (props) => {
  const [state, dispatch] = useReducer(ApiOneReducer);
  return (
    <ApiOneContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ApiOneContext.Provider>
  );
};
