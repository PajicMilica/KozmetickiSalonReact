import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";


function NavBar({ number }) {
  return (
    <div className="navBar">
        <a href>Kozmetički salon</a>
        <Link to="/" style ={{ marginLeft: 1000 }}>Usluge</Link>

        <Link to="/cart" className="cart-items">
        
          <BsFillCartFill style={{ marginLeft: 50}} />
          <p className="num" style={{ marginLeft: 5 }}>{number}</p>
          </Link>
    </div>
  );
}


export default NavBar;
