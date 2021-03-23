import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

const Product = ({ item }) => {
  const { dispatch } = useContext(CartContext);
  const addtoNewCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      id: product?.id,
      name: product?.name,
      price: product?.price,
    });
  };
  return (
    <div>
      <h2>{item?.name}</h2>
      <h3>{item?.price}</h3>
      <button onClick={() => addtoNewCart(item)}>add to cart</button>
    </div>
  );
};

export default Product;
