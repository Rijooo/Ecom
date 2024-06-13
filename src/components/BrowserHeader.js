import React from "react";
import { useSelector, UseSelector } from "react-redux";
import { Link } from "react-router-dom";


const BrowserHeader = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <ul>
        <li>
          <Link to="/cart">Cart - {cartItems.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default BrowserHeader;
