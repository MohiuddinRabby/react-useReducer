import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import Product from "./Product";

const Shop = () => {
  const { state, dispatch } = useContext(CartContext);
  useEffect(() => {
    dispatch({ type: "GET_DATA" });
  }, [dispatch]);
  return (
    <div>
      <h1>Shop</h1>
      {state?.productData?.map((item) => (
        <Product key={item?.id} item={item}></Product>
      ))}
    </div>
  );
};

export default Shop;
