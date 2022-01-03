import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";



function NavBar({ number }) {
  return (
    <div className="navBar">
        <a >Kozmetički salon</a>

        <Link to="/home" className="home">
        <BsFillHouseDoorFill style={{ marginLeft: 800}}/>
        <p className="h" style={{ marginLeft: 5}}>Home</p>
        </Link>

        <Link to="/" style ={{ marginLeft: 75 }}>Usluge</Link>

        <Link to="/cart" className="cart-items">
          <BsFillCartFill style={{ marginLeft: 50}} />
          <p className="num" style={{ marginLeft: 5 }}>{number}</p>
        </Link>
    </div>
  );
}


export default NavBar;
