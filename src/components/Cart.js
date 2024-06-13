import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      {" "}
      <div className="text-center font-extrabold">CART</div>
    </>
  );
};

export default Cart;
