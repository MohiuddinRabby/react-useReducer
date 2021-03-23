import { demoData } from "../../demoData";

const initialState = {
  productData: demoData,
  cart: [],
};
export const CartReducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return state;
    case "ADD_TO_CART":
      const newItems = {
        id: action.id,
        name: action.name,
        price: action.price,
      };
      const newCart = [...state.cart, newItems];
      return { ...state, cart: newCart };

    default:
      return action;
  }
};
