import React from "react";
import { BsFillCartFill } from "react-icons/bs";


function NavBar({ number }) {
  return (
    <div className="navBar">
      <a>Kozmetički salon</a>
      <a className="cart-items">
        <BsFillCartFill style={{ marginLeft: 1200 }} />
        <div className="num">{number}</div>
      </a>
    </div>
  );
}


export default NavBar;
