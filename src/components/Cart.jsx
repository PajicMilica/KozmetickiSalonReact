import CartServices from "./CartServices";
import { useState } from "react";


const Cart = ({ cartServices, cartSum}) => {
  
  return (
    <div className="cart">
      <h3 className="amount">Ukupan iznos: {cartSum} din.</h3>
      {cartServices.map((service) => (
        <CartServices service={service} />
      ))}

    </div>
  );
};

export default Cart;
