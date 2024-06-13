import React from "react";
import { useSelector, UseSelector } from "react-redux";

const BrowserHeader = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <ul>
        <li>Cart - {cartItems.length}</li>
      </ul>
    </div>
  );
};

export default BrowserHeader;
