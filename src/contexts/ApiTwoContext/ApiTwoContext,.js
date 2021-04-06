import { createContext, useReducer } from "react";
import { ApiTwoReducer } from "../../reducers/ApiTwoReducer/ApiTwoReducer";

export const ApiTwocontext = createContext();
export const ApiTwocontextProvider = (props) => {
  const [state, dispatch] = useReducer(ApiTwoReducer, {
    allPostData: [],
    singlePostData: {},
    loading: true,
  });
  return (
    <ApiTwocontext.Provider value={{ state, dispatch }}>
      {props.children}
    </ApiTwocontext.Provider>
  );
};
