import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

const NavCart = () => {
  const { state } = useContext(CartContext);
  console.log(state?.cart);
  return (
    <div>
      <h4>Nav Cart:{state?.cart?.length}</h4>
    </div>
  );
};

export default NavCart;
