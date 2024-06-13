import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      {" "}
      <div className="text-center font-extrabold">CART</div>
      <div className="p-3 m-3">{cartItems.map((e) => e.name)}</div>
      <div className="p-3 m-3">{cartItems.map((e) => e.price)}</div>
    </>
  );
};

export default Cart;
