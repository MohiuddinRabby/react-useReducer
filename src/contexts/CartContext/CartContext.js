import { createContext, useReducer } from "react";
import { CartReducerFunc } from "../../reducers/CartReducer/CartReducer";

export const CartContext = createContext();
export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartReducerFunc);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
