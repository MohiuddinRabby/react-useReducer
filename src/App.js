import React from "react";
import Cart from "./components/Cart/Cart";
import NavCart from "./components/Cart/NavCart";
import { CartContextProvider } from "./contexts/CartContext/CartContext";

const App = () => {
  return (
    <div>
      <CartContextProvider>
        <NavCart />
        <Cart />
      </CartContextProvider>
    </div>
  );
};

export default App;
